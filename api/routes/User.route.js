import express from "express";
import { getNumUser } from "../controller/User.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/getNumUser",  getNumUser);

export default router;
