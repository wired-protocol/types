import { z } from "zod";

export const WebSocketMessageSchema = z.object({
  id: z.string(),
  data: z.any(),
});

export type WebSocketMessage = z.infer<typeof WebSocketMessageSchema>;
