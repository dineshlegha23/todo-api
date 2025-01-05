import express from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getSingleTask,
  updateTask,
} from "../controllers/task.controller.js";
import { authenticateUser } from "../middlewares/authenticateUser.js";

const router = express.Router();

router.get("/", authenticateUser, getAllTasks);
router.get("/:id", authenticateUser, getSingleTask);
router.put("/:id", authenticateUser, updateTask);
router.delete("/:id", authenticateUser, deleteTask);
router.post("/", authenticateUser, createTask);

export default router;
