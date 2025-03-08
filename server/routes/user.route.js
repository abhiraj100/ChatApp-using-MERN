import express from "express";
import { signup, login, logout } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.route("/signup").post(signup);
userRouter.route("/login").post(login);
userRouter.route("/logout").post(logout);

export default userRouter;
