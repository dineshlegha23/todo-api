import Task from "../models/task.model.js";

export const createTask = async (req, res) => {
  const title = req.body?.title;
  const description = req.body?.description;

  if (!title)
    return res.status(400).json({ error: "Please provide task title" });

  if (!description)
    return res.status(400).json({ error: "Please provide task description" });

  try {
    const newTask = await Task.create({
      title,
      description,
    });

    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ total: tasks.length, tasks });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSingleTask = async (req, res) => {
  const { id } = req.params;
  if (!id)
    return res.status(400).json({ error: "Please provide valid task id" });
  try {
    const task = await Task.findById(id);
    if (!task) return res.status(404).json({ error: "Task not found" });

    res.status(200).json(task);
  } catch (error) {
    if (error.kind === "ObjectId")
      return res.status(400).json({ error: "Invalid task id" });

    res.status(500).json({ error: error.message });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const status = req.body?.status;
  if (!status)
    return res.status(400).json({ error: "Please provide task status" });

  if (
    status !== "pending" &&
    status !== "in-progress" &&
    status !== "completed"
  )
    return res
      .status(400)
      .json({ error: "Task status must be pending, in-progress or completed" });

  try {
    const task = await Task.findById(id);
    if (!task) return res.status(404).json({ error: "Task not found" });

    task.status = status;
    await task.save();
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findById(id);

    if (task) {
      await Task.findByIdAndDelete(id);
      res.status(200).json({ message: "Task deleted successfully" });
    } else {
      res.status(404).json({ error: "Task not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
