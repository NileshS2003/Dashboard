import express from "express";
import { getNumProducts } from "../controller/Product.controller.js";
const router = express.Router();

router.get("/getNumProduct", getNumProducts);

export default router;
