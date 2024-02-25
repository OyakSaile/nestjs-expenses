import { z } from 'zod';

export const createTransactionSchema = z.object({
  description: z.string().optional(),
  category: z.string().min(1),
  title: z.string().min(1),
  date: z.date().optional(),
  type: z.enum(['INCOME', 'EXPENSE']),
  amount: z.number().positive(),
});
