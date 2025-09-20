import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, { error: "Content must be atleast 10 chars" })
    .max(300, { error: "Content cannot be more than 300 chars" }),
});
