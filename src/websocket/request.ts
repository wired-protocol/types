import { z } from "zod";
import {
  WebRTCDtlsParametersSchema,
  WebRTCRtpParametersSchema,
  WebRTCSctpStreamParametersSchema,
  WebRTCRtpCapabilitiesSchema,
} from "./webrtc";

export const RequestMessageSchema = z.union([
  z.object({
    type: z.literal("join"),
    data: z.string(),
  }),
  z.object({
    type: z.literal("leave"),
    data: z.string().describe("The URI of the world to leave"),
  }),
  z.object({
    type: z.literal("send_chat_message"),
    data: z.string().describe("The message to send"),
  }),
  z.object({
    type: z.literal("set_avatar"),
    data: z.string().describe("The URI of the user's avatar"),
  }),
  z.object({
    type: z.literal("set_name"),
    data: z.string().describe("The name of the user"),
  }),
  z.object({
    type: z.literal("set_grounded"),
    data: z.boolean().describe("Whether the user is grounded"),
  }),
  z.object({
    type: z.literal("pause_audio"),
    data: z.boolean().describe("Whether the user's incoming audio is paused"),
  }),
  z.object({
    type: z.literal("webrtc_connect_transport"),
    data: z.object({
      type: z.union([z.literal("producer"), z.literal("consumer")]),
      dtlsParameters: WebRTCDtlsParametersSchema,
    }),
  }),
  z.object({
    type: z.literal("webrtc_create_transport"),
    data: z.union([z.literal("producer"), z.literal("consumer")]),
  }),
  z.object({
    type: z.literal("webrtc_get_router_rtp_capabilities"),
    data: z.null(),
  }),
  z.object({
    type: z.literal("webrtc_produce"),
    data: WebRTCRtpParametersSchema,
  }),
  z.object({
    type: z.literal("webrtc_produce_data"),
    data: WebRTCSctpStreamParametersSchema,
  }),
  z.object({
    type: z.literal("set_rtp_capabilities"),
    data: WebRTCRtpCapabilitiesSchema,
  }),
]);

export type RequestMessage = z.infer<typeof RequestMessageSchema>;
