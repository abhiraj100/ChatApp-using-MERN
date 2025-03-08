import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";

import { createTokenAndSaveCookie } from "../jwt/generateToken.js";

const signup = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Password do not match" });
    }

    const user = await userModel.findOne({ email });

    if (user) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    // hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await new userModel({
      name: name,
      email: email,
      password: hashedPassword,
      confirmPassword: hashedPassword,
    });

    await newUser.save();

    if (newUser) {
      createTokenAndSaveCookie(newUser._id, res);
      return res.status(201).json({
        success: true,
        message: "User registered successfully",
        user: {
          _id: newUser._id,
          name: newUser.name,
          email: newUser.email,
        },
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while registering the user",
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if user exists
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User does not exists",
      });
    }

    // Compare password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Incorrect password or invalid credentials",
      });
    }

    // Generate token
    createTokenAndSaveCookie(user._id, res);

    return res.status(200).json({
      success: true,
      message: "Login Successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("Login Error: ", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error during login",
    });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("jwt");
    return res
      .status(200)
      .json({ success: true, message: "User logged out successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error during logout",
    });
  }
};

export { signup, login, logout };
