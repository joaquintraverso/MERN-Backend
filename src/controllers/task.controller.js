import { request, response, next } from "express";
import TaskModel from "../models/Task";
import UserModel from "../models/User";

export const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await TaskModel.find().lean()

    if (tasks) {
      var msg = "tasks received correctly"
      return res.status(200).send({ status: 200, msg, tasks });
    } else {
      var msg = "tasks not found"
      return res.status(403).send({ status: 403, msg })
    }

  } catch (error) {
    var msg = "get task error"
    res.status(500).send({ status: 500, msg })
  }
}

export const getTask = async (req, res, next) => {
  const { id } = req.params;

  try {
    const task = await TaskModel.findById(id).exec()

    if (task) {
      var msg = "task received correctly"
      return res.status(200).send({ status: 200, msg, task });
    } else {
      var msg = "task not found"
      return res.status(403).send({ status: 403, msg })
    }

  } catch (error) {
    var msg = "get task error"
    res.status(500).send({ status: 500, msg })
  }
}

export const createTask = async (req, res, next) => {
  const { title, description, userId } = req.body;

  const user = await UserModel.findById(userId);

  try {
    const task = new TaskModel({
      title,
      description,
      user: user._id
    })

    const savedTask = await task.save();

    user.tasks = user.tasks.concat(savedTask._id)
    await user.save();

    if (task) {
      var msg = "task created correctly"
      return res.status(200).send({ status: 200, msg, task });
    } else {
      var msg = "task not found"
      return res.status(403).send({ status: 403, msg })
    }
  } catch (error) {
    var msg = "create task error"
    res.status(500).send({ status: 500, msg })
  }
}

export const editTask = async (req, res, next) => {
  const { id } = req.params;

  try {
    const task = await TaskModel.findByIdAndUpdate({ _id: id }, req.body);

    if (task) {
      var msg = "task updated correctly"
      return res.status(200).send({ status: 200, msg, task });
    } else {
      var msg = "task not found"
      return res.status(403).send({ status: 403, msg })
    }

  } catch (error) {
    var msg = "edit task error"
    res.status(500).send({ status: 500, msg })
  }
};

export const deleteTask = async (req, res, next) => {
  const { id } = req.params;

  try {
    const task = await TaskModel.findByIdAndRemove({ _id: id });

    if (task) {
      var msg = "task delete correctly"
      return res.status(200).send({ status: 200, msg, task });
    } else {
      var msg = "task not found"
      return res.status(403).send({ status: 403, msg })
    }
    
  } catch (error) {
    var msg = "delete task error"
    res.status(500).send({ status: 500, msg })  }
};