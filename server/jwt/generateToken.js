import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const createTokenAndSaveCookie = (userId, res) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "5d",
  });
  return res.cookie("jwt", token, {
    httpOnly: true, // protect us from xss attack
    secure: true,
    sameSite: "strict", // safe from csrf attack
  });
};

export { createTokenAndSaveCookie };
