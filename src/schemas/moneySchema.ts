import * as z from "zod";

/*
  Schema de validação do formulário financeiro.
  Define as regras de negócio do MoneyFlow.
*/
export const moneySchema = z.object({
  description: z
    .string()
    .min(3, "A descrição deve ter no mínimo 3 caracteres"),

  value: z
    .number({
      message: "O valor deve ser numérico",
    })
    .positive("O valor deve ser maior que zero"),

  // O "as const" garante que o TypeScript trate isto como valores exatos
  type: z.enum(["Entrada", "Saída"] as const, {
    message: "Selecione o tipo de movimentação",
  }),
});

/*
  Tipo TypeScript gerado a partir do schema.
*/
export type MoneyFormData = z.infer<typeof moneySchema>;