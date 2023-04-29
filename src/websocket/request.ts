import { z } from "zod";

import { XyzUnaviWebrtcRequestSchema } from "./xyz.unavi.webrtc";
import { XyzUnaviWorldRequestSchema } from "./xyz.unavi.world";

export const RequestMessageSchema = z.union([
  XyzUnaviWebrtcRequestSchema,
  XyzUnaviWorldRequestSchema,
]);

export type RequestMessage = z.infer<typeof RequestMessageSchema>;
