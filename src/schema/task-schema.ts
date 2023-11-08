import { z } from "zod";

export const formSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be atleast 3 characters" })
    .max(100, { message: "It's too long" }),
  description: z
    .string()
    .min(5, { message: "Hey the title is not long enough" })
    .max(200, { message: "Its too long" })
    .trim(),
  isImportant: z.boolean().default(false),
  date: z.date({ required_error: "Date is required" }),
});

export const updateSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be atleast 3 characters" })
    .max(100, { message: "It's too long" }),
  description: z
    .string()
    .min(5, { message: "Hey the title is not long enough" })
    .max(200, { message: "Its too long" })
    .trim(),
  isImportant: z.boolean().default(false),
  isCompleted: z.boolean().default(false),
  date: z.date({ required_error: "Date is required" }),
});
