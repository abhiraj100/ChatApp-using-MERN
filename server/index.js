import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import options from "./config/config.js";
import connectDB from "./config/dbConnection.js";
connectDB();
import userRouter from "./routes/user.route.js";
import messageRouter from "./routes/message.route.js";
import cookieParser from "cookie-parser";

// app config
const app = express();
const PORT = process.env.PORT || 4600;

// middleware
app.use(express.json());
app.use(cors(options));
app.use(cookieParser()); // The cookie-parser middleware helps extract and parse cookies from incoming HTTP requests.

// API endpoints
app.use("/api/user", userRouter);
app.use("/api/message", messageRouter);

// app.get("/", (req, res) => {
//   res.send("Working Fine");
// });

app.listen(PORT, () => {
  console.log(`Server is running on port : http://localhost:${PORT}`);
});
