import { z } from 'zod';

export const envSchema = z.object({
  JWT_SECRET: z.string(),
  PORT: z.coerce.number().default(3333),
});

export type Env = z.infer<typeof envSchema>;

const _env = envSchema.parse(process.env);

if (!_env) {
  throw new Error('Invalid env');
}

export const env: Env = _env;
