import { z } from "zod";

import { WebrtcResponseSchema } from "./com.wired-protocol.webrtc";
import { WorldResponseSchema } from "./com.wired-protocol.world";

export const ResponseMessageSchema = z.union([
  WebrtcResponseSchema,
  WorldResponseSchema,
]);

export type ResponseMessage = z.infer<typeof ResponseMessageSchema>;
