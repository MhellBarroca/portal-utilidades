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
      invalid_type_error: "O valor deve ser numérico",
    })
    .positive("O valor deve ser maior que zero"),
});

/*
  Tipo TypeScript gerado a partir do schema.
*/
export type MoneyFormData = z.infer<typeof moneySchema>;


// // 📌 Por que number e não string?

// // Porque vamos fazer cálculo de saldo.
// // Isso evita conversão manual depois.


