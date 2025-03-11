import mongoose from "mongoose";
import userModel from "./user.model.js";
import messageModel from "./message.model.js";

const conversationSchema = new mongoose.Schema(
  {
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: userModel,
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: messageModel,
        default: [],
      },
    ],
  },
  {
    timestamps: true,
  }
);

const conversationModel =
  mongoose.models.conversation ||
  mongoose.model("conversation", conversationSchema);

export default conversationModel;
