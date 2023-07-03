import { z } from "zod";

import { WebrtcRequestSchema } from "./xyz.unavi.webrtc";
import { WorldRequestSchema } from "./xyz.unavi.world";

export const RequestMessageSchema = z.union([
  WebrtcRequestSchema,
  WorldRequestSchema,
]);

export type RequestMessage = z.infer<typeof RequestMessageSchema>;
