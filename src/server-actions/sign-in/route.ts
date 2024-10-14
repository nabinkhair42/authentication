"use server";
import * as z from "zod";
import { SignInSchema } from "@/schemas";
export const SignIn = async (values: z.infer<typeof SignInSchema>) => {
  console.log("Values", values);
  const validateFields = SignInSchema.safeParse(values);
  if (!validateFields.success) {
    return {
      error: "Invalid Fields",
    };
  }
  
};
