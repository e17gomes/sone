import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("invalid e-mail"),
  password: z
    .string()
    .min(6, "Password need 6 or more characters")
    .refine(
      (value) =>
        /[A-Z]/.test(value) &&
        /[0-9]/.test(value) &&
        /[!@#$%^&*(),.?":{}|<>]/.test(value),
      "The password must contain one number, one uppercase letter and one special character (!, @, #, etc.)."
    ),
});

export type loginFormType = z.infer<typeof loginSchema>;