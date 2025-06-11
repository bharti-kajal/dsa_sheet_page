import Joi from "joi";

// 1. Validate SubTopics
export const validateSubTopics = (req, res, next) => {
  const schema = Joi.object({
    topicId: Joi.string().required().messages({
      "any.required": "Topic Id is required",
      "string.required": "Topic Id is required",
    }),
    subtopicId: Joi.string().required().messages({
      "any.required": "Sub Topic Id is required",
      "string.required": "Sub Topic Id is required",
    }),
    status: Joi.string().required().messages({
      "any.required": "Status is required",
      "string.required": "Status is required",
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
