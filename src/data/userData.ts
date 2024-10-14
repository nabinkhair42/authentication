import dbConnect from "@/lib/dbConnect";
import { User } from "@/models/User";

export const getUserByEmail = async (email: string) => {
  try {
    await dbConnect();
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    return;
  }
};

export const getUserById = async (id: string) => {
  try {
    await dbConnect();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    return;
  }
};
