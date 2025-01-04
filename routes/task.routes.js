import express from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getSingleTask,
  updateTask,
} from "../controllers/task.controller.js";

const router = express.Router();

router.get("/", getAllTasks);
router.get("/:id", getSingleTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
router.post("/", createTask);

export default router;
