import bcryptjs from "bcryptjs";
import { errorhandler } from "../utils/error.js";
import { User } from "../model/User.model.js";

// export const test = (req, res) => {
//   res.json({
//     message: 'Api route is working!',
//   });
// };

// export const deleteUser = async (req, res, next) => {
//   if (req.user.id !== req.params.id)
//     return next(errorhandler(401, 'You can only delete your own account!'));
//   try {
//     const deleteUser = await User.findOneAndDelete(
//       req.params.id
//     );
//     res.clearCookie('access_token')
//     res.status(200).json("successful deletion");
//   } catch (error) {
//     next(error);
//   }
// };

export const getNumUser = async (req, res, next) => {
  try {
    const users = await User.find();

    // if (!users) return next(errorhandler(404, 'Users not found!'));
    const len=users.length
    res.status(200).json({ num_user: len });
  } catch (error) {
    next(error);
  }
};
