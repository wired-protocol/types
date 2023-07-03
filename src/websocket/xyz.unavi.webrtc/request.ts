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
    id: z.literal("xyz.unavi.webrtc.audio.pause"),
    data: z.boolean(),
  }),
  z.object({
    id: z.literal("xyz.unavi.webrtc.transport.connect"),
    data: z.object({
      type: TransportTypeSchema,
      dtlsParameters: WebRTCDtlsParametersSchema,
    }),
  }),
  z.object({
    id: z.literal("xyz.unavi.webrtc.transport.create"),
    data: TransportTypeSchema,
  }),
  z.object({
    id: z.literal("xyz.unavi.webrtc.router.rtpCapabilities.get"),
    data: z.null(),
  }),
  z.object({
    id: z.literal("xyz.unavi.webrtc.rtpCapabilities.set"),
    data: WebRTCRtpCapabilitiesSchema,
  }),
  z.object({
    id: z.literal("xyz.unavi.webrtc.produce"),
    data: WebRTCRtpParametersSchema,
  }),
  z.object({
    id: z.literal("xyz.unavi.webrtc.produceData"),
    data: WebRTCSctpStreamParametersSchema,
  }),
]);

export type WebrtcRequest = z.infer<typeof WebrtcRequestSchema>;
