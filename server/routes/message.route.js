import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {sendMessage, getMessage} from "../controllers/message.controller.js";


const messageRouter = express.Router();

messageRouter.route("/send/:id").post(authMiddleware, sendMessage);
messageRouter.route("/get/:id").get(authMiddleware, getMessage);


export default messageRouter;