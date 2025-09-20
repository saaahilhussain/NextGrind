import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, { error: "Username must be at least 2 chars" })
  .max(10, { error: "Username should not be more than 10 chars" })
  .regex(/^[a-zA-Z0-9_]+$/, {
    error: "Username must not contain special characters",
  });

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.email({ error: "Entered email is not valid" }),
  password: z.string().min(6, { error: "Password must have atleast 6 chars" }),
});
