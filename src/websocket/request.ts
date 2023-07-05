import { z } from "zod";

import { WebrtcRequestSchema } from "./com.wired-protocol.webrtc";
import { WorldRequestSchema } from "./com.wired-protocol.world";

export const RequestMessageSchema = z.union([
  WebrtcRequestSchema,
  WorldRequestSchema,
]);

export type RequestMessage = z.infer<typeof RequestMessageSchema>;
