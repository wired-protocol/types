import { z } from "zod";

import { WebrtcResponseSchema } from "./xyz.unavi.webrtc";
import { WorldResponseSchema } from "./xyz.unavi.world";

export const ResponseMessageSchema = z.union([
  WebrtcResponseSchema,
  WorldResponseSchema,
]);

export type ResponseMessage = z.infer<typeof ResponseMessageSchema>;
