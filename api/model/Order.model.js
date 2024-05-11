import mongoose from "mongoose";
const { Schema } = mongoose;

const OrderSchema = new Schema({
  items: { type: [Schema.Types.Mixed] },
  totalAmount: { type: Number, required: true },
  totalItems: { type: Number, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  paymentMethod: { type: String, required: true },
  status: { type: String, required: true, default: "pending" },
  selectedAddress: { type: Schema.Types.Mixed, required: true },
},{timestamps:true});


export const Order = mongoose.model("Order", OrderSchema);
