import express from "express";
import {
  getDistributedSale,
  getTotalSale,
} from "../controller/Order.controller.js";

const router = express.Router();

router
  .get("/getTotalSale", getTotalSale)
  .get("/getDistributedSale", getDistributedSale);

export default router;
