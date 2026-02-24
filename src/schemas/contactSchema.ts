import * as z from "zod";

/*
  Schema de validação do formulário de contatos.
  Aqui definimos as regras que os campos devem seguir.
  O React Hook Form usa esse schema para validar os dados.
*/
export const contactSchema = z.object({
  name: z
    .string()
    .min(3, "O nome deve ter no mínimo 3 caracteres"),

  email: z
    .string()
    .email("E-mail inválido"),

  phone: z
    .string()
    .regex(/^[0-9]+$/, "O telefone deve conter apenas números")
});

/*
  Tipo TypeScript gerado a partir do schema.
  Isso garante tipagem forte e evita uso de 'any'.
*/
export type ContactFormData = z.infer<typeof contactSchema>;

