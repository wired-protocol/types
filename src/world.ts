import { z } from "zod";

export const WorldInfoSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  authors: z.array(z.string()).optional(),
  image: z.string().url().optional(),
  host: z.string().min(1).optional(),
  extras: z.record(z.any()).optional(),
});

export type WorldInfo = z.infer<typeof WorldInfoSchema>;

export const WorldMetadataSchema = z.object({
  info: WorldInfoSchema.optional(),
  model: z.string().min(1),
});

export type WorldMetadata = z.infer<typeof WorldMetadataSchema>;
