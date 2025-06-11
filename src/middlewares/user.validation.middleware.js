import Joi from "joi";

// 1. Signup Validation
export const validateUserSignUp = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(2).required().messages({
      'any.required': 'Name is required',
      'string.min': 'Name should have at least 2 characters'
    }),
    email: Joi.string().email().required().messages({
      'any.required': 'Email is required',
      'string.email': 'Email must be valid'
    }),
    password: Joi.string().min(6).required().messages({
      'any.required': 'Password is required',
      'string.min': 'Password must be at least 6 characters long'
    }),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      status: false,
      message: error.details[0].message,
    });
  }

  next();
};

// 2.Login Validation
export const validateUserLogin = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required().messages({
      'any.required': 'Email is required',
      'string.email': 'Please enter a valid email',
    }),
    password: Joi.string().required().messages({
      'any.required': 'Password is required',
    }),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      status: false,
      message: error.details[0].message,
    });
  }

  next();
};
