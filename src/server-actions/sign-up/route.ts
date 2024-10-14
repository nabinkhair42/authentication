"use server";
import { z } from "zod";
import bcrypt from "bcrypt";
import { SignUpSchema } from "@/schemas";
import dbConnect from "@/lib/dbConnect";
import { User } from "@/models/User";
import { getUserByEmail } from "@/data/userData";

export const SignUp = async (values: z.infer<typeof SignUpSchema>) => {
  const validateFields = SignUpSchema.safeParse(values);
  await dbConnect();
  if (!validateFields.success) {
    return {
      error: "Invalid Fields",
    };
  }
  const { email, password, name } = validateFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  const userExists = await getUserByEmail(email);
  if (userExists) {
    return {
      error: "User Already Exists",
    };
  }

  const user = new User({
    email,
    password: hashedPassword,
    name,
  });
  await user.save();
  return {
    success: "Sign Up Successful",
  };
};
