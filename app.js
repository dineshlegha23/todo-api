import express, { urlencoded } from "express";
import dotenv from "dotenv";
import connectMongoDB from "./config/db.config.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(urlencoded({ extended: true }));

dotenv.config();
app.use(cookieParser(process.env.JWT_SECRET));

import tasksRouter from "./routes/task.routes.js";
import authRouter from "./routes/auth.routes.js";

app.use("/api/v1/tasks", tasksRouter);
app.use("/api/v1/auth", authRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  connectMongoDB();
  console.log(`Server is listening on PORT: ${PORT}`);
});
