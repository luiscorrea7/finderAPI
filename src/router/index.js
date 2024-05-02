import Router from "express";
import { startRouter } from "../API/start/route/start.routes.js";
import { feedbackRouter } from "../API/feedback/route/feedback.routes.js";

export const appRouter = Router();


appRouter.use("/api/start", startRouter);
appRouter.use("/api/feedback", feedbackRouter);
