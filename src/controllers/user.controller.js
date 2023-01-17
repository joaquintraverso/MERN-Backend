import { request, response, next } from "express";
import UserModel from "../models/User";

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await UserModel.find({}).populate('tasks')

    if (users) {
      var msg = "users received correctly"
      return res.status(200).send({ status: 200, msg, users });
    } else {
      var msg = "users not found"
      return res.status(403).send({ status: 403, msg })
    }

  } catch (error) {
    var msg = "get user error"
    res.status(500).send({ status: 500, msg })
  }
}

export const getUser = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await UserModel.findById(id).exec()

    if (user) {
      var msg = "user received correctly"
      return res.status(200).send({ status: 200, msg, user });
    } else {
      var msg = "user not found"
      return res.status(403).send({ status: 403, msg })
    }

  } catch (error) {
    var msg = "get user error"
    res.status(500).send({ status: 500, msg })
  }
}

export const createUser = async (req, res, next) => {
  const { name, lastName, email } = req.body;
  
  try {
    const user = new UserModel({ name, lastName, email })
    await user.save();

    if (user) {
      var msg = "user created correctly"
      return res.status(200).send({ status: 200, msg, user });
    } else {
      var msg = "user not found"
      return res.status(403).send({ status: 403, msg })
    }
  } catch (error) {
    var msg = "create user error"
    res.status(500).send({ status: 500, msg })
  }
}

export const editUser = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await UserModel.findByIdAndUpdate({ _id: id }, req.body);

    if (user) {
      var msg = "user updated correctly"
      return res.status(200).send({ status: 200, msg, user });
    } else {
      var msg = "user not found"
      return res.status(403).send({ status: 403, msg })
    }

  } catch (error) {
    var msg = "edit user error"
    res.status(500).send({ status: 500, msg })
  }
};

export const deleteUser = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await UserModel.findByIdAndRemove({ _id: id });

    if (user) {
      var msg = "user delete correctly"
      return res.status(200).send({ status: 200, msg, user });
    } else {
      var msg = "user not found"
      return res.status(403).send({ status: 403, msg })
    }
    
  } catch (error) {
    var msg = "delete user error"
    res.status(500).send({ status: 500, msg })  }
};