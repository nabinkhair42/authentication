import * as z from "zod";

export const SignUpSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z
    .string()
    .min(6, { message: "Password must be of at least 6 characters" })
    .refine((password) => /[A-Z]/.test(password), {
      message: "Password must contain at least one uppercase letter",
    })
    .refine((password) => /[a-z]/.test(password), {
      message: "Password must contain at least one lowercase letter",
    })
    .refine((password) => /[0-9]/.test(password), {
      message: "Password must contain at least one number",
    })
    .refine((password) => /[^A-Za-z0-9]/.test(password), {
      message: "Password must contain at least one special character",
    }),
  name: z
    .string()
    .min(1, {
      message: "Password is required",
    })
    .refine((username) => /^[a-zA-Z0-9_]*$/.test(username), {
      message: "Username must contain only alphanumeric characters",
    }),
});

export const SignInSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});
