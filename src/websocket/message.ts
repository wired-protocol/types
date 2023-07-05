import { z } from "zod";

export const WebSocketMessageSchema = z.object({
  id: z.string(),
  target: z.union([z.literal("server"), z.literal("client")]).default("server"),
  data: z.any(),
});

export type WebSocketMessage = z.infer<typeof WebSocketMessageSchema>;
