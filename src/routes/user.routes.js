import express from "express";
import { createUser, deleteUser, editUser, getAllUsers, getUser } from "../controllers/user.controller";

const router = express.Router();

router.get("/user", getAllUsers)
router.get("/user/:id", getUser)
router.post("/user/add", createUser)
router.put("/user/:id/edit", editUser)
router.delete("/user/:id/delete", deleteUser)

export default router;