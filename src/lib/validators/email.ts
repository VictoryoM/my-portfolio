import { z } from "zod";

export const EmailValidator = z.object({
  email: z
    .string()
    .email({
      message: "Invalid email address, please check again.",
    })
    .min(2, {
      message: "Invalid email address, please check again.",
    })
    .max(50, {
      message: "Invalid email address, please check again.",
    }),
  subject: z.string().min(2, {
    message: "Invalid subject, please check again.",
  }),
  message: z.string().min(2, {
    message: "Invalid message, please check again.",
  }),
});

export type EmailSendPayload = z.infer<typeof EmailValidator>;
