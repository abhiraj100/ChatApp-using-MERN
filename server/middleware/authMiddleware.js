import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";

const authMiddleware = async (req, res, next) => {
  try {
    if (!req.cookies || !req.cookies.jwt) {
      return res
        .status(401)
        .json({ success: false, message: "No Token, authorization denied" });
    }
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "No Token, authorization denied" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(403).json({
        success: false,
        message: "Invalid Token",
      });
    }

    const user = await userModel.findById(decoded.userId).select("-password"); // current loggedin user
    if (!user) {
      return res.status(404).json({ success: false, message: "No user found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("Error in authMiddleware : ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default authMiddleware;
