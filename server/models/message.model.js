import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    receiverID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    message: {
      type: String,
      required: true,
      maxLength: 1000,
      trim: true,
      validate: [
        {
          validator: (value) => value.length > 0,
          message: "Message cannot be empty",
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

const messageModel =
  mongoose.models.message || mongoose.model("message", messageSchema);

export default messageModel;
