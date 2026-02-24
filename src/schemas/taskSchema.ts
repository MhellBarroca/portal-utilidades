import { z } from "zod";

export const taskSchema = z.object({
  title: z
    .string()
    .min(5, "O título deve ter no mínimo 5 caracteres"),
  category: z.enum(["Trabalho", "Pessoal", "Urgente"]),
});

export type TaskFormData = z.infer<typeof taskSchema>;


//Esse arquivo define as regras do formulário de tarefas, onde dizemos o que é válido ou não.

// Usamos o z.enum Para não deixar digitar qualquer coisa na categoria;/opção.

//Usamos infer nesse caso, somente pra não repetir código. Se eu mudar a regra, o tipo já muda junto.

