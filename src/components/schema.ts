import { z } from "zod";

export const schema = z.object({
  date: z.string().min(1, "Data é obrigatória"),
  category: z.string().min(1, "Categoria é obrigatória"),
  title: z.string().min(1, "Título é obrigatório"),
  value: z
    .string()
    .min(1, "Preencha o campo corretamente")
    .regex(/^\d+$/, "Apenas números")
    .transform((val) => Number(val))
});