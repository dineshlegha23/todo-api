import mongose from "mongoose";

const taskSchema = new mongose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
      required: true,
      enum: ["pending", "in-progress", "completed"],
    },
  },
  { timestamps: true }
);

const Task = mongose.model("Task", taskSchema);

export default Task;
