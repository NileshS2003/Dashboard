import mongoose from "mongoose";
const { Schema } = mongoose;

const ProductSchema = new Schema({
  // id:{type:Number, required:true},
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  discountPercentage: {
    type: Number,
    required: true,
    min: [0, "Discount is in negative"],
    max: [99, "Way more discount it's more than 100"],
  },
  price: { type: Number, required: true },
  rating: {
    type: Number,
    required: true,
    default: 0,
    min: [0, "rating can't be negative"],
    max: [5, "rating more than 5"],
  },
  stock: { type: Number, required: true, default: 0 },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String, required: true },
  images: { type: [String], required: true },
  deleted: { type: Boolean, default: false },
});

export const Product = mongoose.model("Product", ProductSchema);
