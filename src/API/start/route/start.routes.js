import { Router } from "express";
import { startAPI } from "../controller/start.controller.js";

export const startRouter = Router();

startRouter.get('/', startAPI);