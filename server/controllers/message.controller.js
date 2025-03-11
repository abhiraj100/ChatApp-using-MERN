import messageModel from "../models/message.model.js";
import conversationModel from "../models/conversation.model.js";

const sendMessage = async (req, res) => {
  try {
    // console.log("Message Sent");
    const { message } = req.body;
    const { id: receiverID } = req.params;
    const senderID = req.user._id; // current logged in user

    let conversation = await conversationModel.findOne({
      members: { $all: [senderID, receiverID] },
    });

    if (!conversation) {
      conversation = await conversationModel.create({
        members: [senderID, receiverID],
      });
    }

    const newMessage = new messageModel({
      senderID,
      receiverID,
      message,
    });

    if (newMessage) {
      //   await newMessage.save();
      conversation.messages.push(newMessage._id);
      //   await conversation.save();
      //   return res.status(201).json({
      //     success: true,
      //     message: "Message sent successfully",
      //   });
    }

    await Promise.all([conversation.save(), newMessage.save()]); // run parallel
    const receiverScoketID = getReceiverSocketID(receiverID);
    if (receiverScoketID) {
      io.to(receiverScoketID).emit("newMessage", newMessage);
    }
    return res.status(201).json({
      success: true,
      message: "Message sent successfully",
      newMessage,
    });
  } catch (error) {
    console.log("Error in getMessage : ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getMessage = async (req, res) => {
  try {
    const { id: chatUser } = req.params;
    const senderID = req.user._id; // current logged in user
    let conversation = await conversationModel
      .findOne({
        members: { $all: [senderID, chatUser] },
      })
      .populate("messages");
    if (!conversation) {
      return res.status(201).json([]);
    }

    const messages = conversation.messages;
    return res.status(201).json({
      success: true,
      messages,
    });
  } catch (error) {
    console.log("Error in getMessage : ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export { sendMessage, getMessage };
