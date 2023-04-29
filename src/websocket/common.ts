import { z } from "zod";

export const PlayerIdSchema = z.number().int().min(0).max(255);

export type PlayerId = z.infer<typeof PlayerIdSchema>;
