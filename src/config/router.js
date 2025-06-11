import express from "express"; // import express
import AuthController from "../controllers/auth.controller.js"; // import Auth controller
import TopicController from "../controllers/topic.contoller.js";
import Auth from "../middlewares/auth.middleware.js"; // import Auth middleware

import {
  validateUserSignUp,
  validateUserLogin,
} from "../middlewares/user.validation.middleware.js";

import {
  validateSubTopics
} from "../middlewares/topic.validation.middleware.js";

const router = express.Router();
const authController = new AuthController();
const topicController = new TopicController(); 

// 1. User Register
router.post("/sign-up", validateUserSignUp, (req, res) => {
  authController.signUp(req, res);
});

// 2. User Login
router.post("/login", validateUserLogin, (req, res) => {
  authController.login(req, res);
});

// 3. Lists Of Topics
router.get("/topics", Auth, (req, res) => {
  topicController.viewTopic(req, res);
});


// 4. change subTopic status
router.post("/sub-topic-status", Auth, validateSubTopics, (req, res) => {
  topicController.subTopicStatus(req, res);
});

// 5. Progress
router.get("/progress", Auth, (req, res) => {
  topicController.progress(req, res);
});

// 6. Unique Email
router.post("/unique-email", (req, res) => {
  authController.checkEmail(req, res);
});

// 7. Dashboard
router.get("/dashboard", Auth, (req, res) => {
  authController.dashboard(req, res);
});

export default router; // export routes
