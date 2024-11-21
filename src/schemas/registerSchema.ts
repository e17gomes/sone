import { z } from "zod";

export const registerSchema = z
  .object({
    username: z.string().min(3, "Username need 3 or more characters"),
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
    confirmPass: z.string(),
  })
  .refine((data) => data.password === data.confirmPass, {
    message: "Passwords don't match",
    path: ["confirmPass"],
  });


  export type registerFormTypes = z.infer<typeof registerSchema>;