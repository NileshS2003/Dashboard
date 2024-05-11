import { Product } from "../model/Product.model.js";

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products).status(201);
  } catch (error) {}
};

export const getNumProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(201).json({ num_products: products.length });
  } catch (error) {
    next(error);
  }
};

// export const getNumUser = async (req, res, next) => {
//   try {
//     const users = await User.find();
//     res.status(200).json({ num_user: users.length.toString });
//   } catch (error) {
//     next(error);
//   }
// };
