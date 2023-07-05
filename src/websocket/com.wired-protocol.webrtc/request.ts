import { z } from "zod";

import {
  TransportTypeSchema,
  WebRTCDtlsParametersSchema,
  WebRTCRtpCapabilitiesSchema,
  WebRTCRtpParametersSchema,
  WebRTCSctpStreamParametersSchema,
} from "./webrtc";

export const WebrtcRequestSchema = z.union([
  z.object({
    id: z.literal("com.wired-protocol.webrtc.audio.pause"),
    data: z.boolean(),
  }),
  z.object({
    id: z.literal("com.wired-protocol.webrtc.transport.connect"),
    data: z.object({
      type: TransportTypeSchema,
      dtlsParameters: WebRTCDtlsParametersSchema,
    }),
  }),
  z.object({
    id: z.literal("com.wired-protocol.webrtc.transport.create"),
    data: TransportTypeSchema,
  }),
  z.object({
    id: z.literal("com.wired-protocol.webrtc.router.rtpCapabilities.get"),
    data: z.null(),
  }),
  z.object({
    id: z.literal("com.wired-protocol.webrtc.rtpCapabilities.set"),
    data: WebRTCRtpCapabilitiesSchema,
  }),
  z.object({
    id: z.literal("com.wired-protocol.webrtc.produce"),
    data: WebRTCRtpParametersSchema,
  }),
  z.object({
    id: z.literal("com.wired-protocol.webrtc.produceData"),
    data: WebRTCSctpStreamParametersSchema,
  }),
]);

export type WebrtcRequest = z.infer<typeof WebrtcRequestSchema>;
