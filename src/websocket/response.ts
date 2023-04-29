import { z } from "zod";

import { XyzUnaviWebrtcResponseSchema } from "./xyz.unavi.webrtc";
import { XyzUnaviWorldResponseSchema } from "./xyz.unavi.world";

export const ResponseMessageSchema = z.union([
  XyzUnaviWebrtcResponseSchema,
  XyzUnaviWorldResponseSchema,
]);

export type ResponseMessage = z.infer<typeof ResponseMessageSchema>;
