import Router from "express";
import { startRouter } from "../API/start/route/start.routes.js";

export const appRouter = Router();


appRouter.use("/api/start", startRouter);
