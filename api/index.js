import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors';


import userRouter from "./routes/User.route.js";
import productRouter from './routes/Product.route.js'
import orderRouter from './routes/Order.route.js'


dotenv.config();
const app = express();


app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  next();
});
app.use(cookieParser());
app.use(cors())

/* To send brower defined errors  */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  return res.status(statusCode).json({
    success: false,
    statusCode, 
    message,
  });
});

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/order", orderRouter);


mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("server connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => { 
  res.send({ status: "success" });
});

app.listen(3000, () => {
  console.log("server started");
});