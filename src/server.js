import cors from "cors";
import express from "express";
import morgan from "morgan";
import { corsConfig } from "./config/cors.config.js";
import { connectDb } from "./resources/DB/dbConnect.js";
import { appRouter } from "./router/index.js";
import { config } from "dotenv";

config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors(corsConfig));

app.use(appRouter);

app.listen(PORT, (err) => {
  if (err) console.error('Error starting server', err);
  console.log(
    `server running succesfully on http://localhost:${PORT}`
  );
  // connectDb();
});
