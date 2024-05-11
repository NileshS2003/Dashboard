import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default: "user" },
  name: { type: String },
  addresses: { type: [{ type: Schema.Types.Mixed }] },
  orders: { type: [{ type: Schema.Types.Mixed }] }
},{timestamps:true});


export const User = mongoose.model("User", userSchema);
