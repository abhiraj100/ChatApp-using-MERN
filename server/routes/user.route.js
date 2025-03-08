import express from "express";
import {
  signup,
  login,
  logout,
  allUsers,
} from "../controllers/user.controller.js";

import authMiddleware from "../middleware/authMiddleware.js";

const userRouter = express.Router();

userRouter.route("/signup").post(signup);
userRouter.route("/login").post(login);
userRouter.route("/logout").post(logout);
userRouter.route("/allUsers").get(authMiddleware, allUsers);

export default userRouter;
