import express from "express";
import {createTask, deleteTask, editTask, getAllTasks, getTask} from '../controllers/task.controller'

const router = express.Router();

router.get("/tasks", getAllTasks)
router.get("/tasks/:id", getTask)
router.post("/tasks/add", createTask)
router.put("/tasks/:id/edit", editTask)
router.delete("/tasks/:id/delete", deleteTask)

export default router;