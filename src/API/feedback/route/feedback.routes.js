import { Router } from "express";
import { feedbackAPI } from "../controller/feedback.controller.js";


export const feedbackRouter = Router();

feedbackRouter.get('/', feedbackAPI);