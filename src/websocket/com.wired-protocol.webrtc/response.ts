import { z } from "zod";

import { PlayerIdSchema } from "../common";
import {
  WebRTCDtlsParametersSchema,
  WebRTCIceCandidateSchema,
  WebRTCRtpCapabilitiesSchema,
  WebRTCRtpParametersSchema,
  WebRTCSctpStreamParametersSchema,
} from "./webrtc";

export const WebrtcResponseSchema = z.union([
  z.object({
    id: z.literal("com.wired-protocol.webrtc.consumer.create"),
    data: z.object({
      playerId: PlayerIdSchema,
      consumerId: z.string(),
      producerId: z.string(),
      rtpParameters: WebRTCRtpParametersSchema,
    }),
  }),
  z.object({
    id: z.literal("com.wired-protocol.webrtc.dataConsumer.create"),
    data: z.object({
      playerId: PlayerIdSchema,
      dataConsumerId: z.string(),
      dataProducerId: z.string(),
      sctpStreamParameters: WebRTCSctpStreamParametersSchema,
    }),
  }),
  z.object({
    id: z.literal("com.wired-protocol.webrtc.producer.id"),
    data: z.string(),
  }),
  z.object({
    id: z.literal("com.wired-protocol.webrtc.dataProducer.id"),
    data: z.string(),
  }),
  z.object({
    id: z.literal("com.wired-protocol.webrtc.router.rtpCapabilities"),
    data: WebRTCRtpCapabilitiesSchema,
  }),
  z.object({
    id: z.literal("com.wired-protocol.webrtc.transport.created"),
    data: z.object({
      type: z.union([z.literal("producer"), z.literal("consumer")]),
      options: z.object({
        id: z.string(),
        iceParameters: z.object({
          usernameFragment: z.string(),
          password: z.string(),
          iceLite: z.boolean().optional(),
        }),
        iceCandidates: z.array(WebRTCIceCandidateSchema),
        dtlsParameters: WebRTCDtlsParametersSchema,
        sctpParameters: z
          .object({
            port: z.number().int().min(0).max(65535),
            OS: z.number().int().min(0),
            MIS: z.number().int().min(0),
            maxMessageSize: z.number().int().min(0),
          })
          .optional(),
        iceServers: z
          .array(
            z.object({
              urls: z.array(z.string()),
              username: z.string().optional(),
              credential: z.string().optional(),
            })
          )
          .optional(),
        iceTransportPolicy: z
          .union([z.literal("all"), z.literal("relay")])
          .optional(),
        proprietaryConstraints: z.record(z.any()).optional(),
        additionalSettings: z.record(z.any()).optional(),
        appData: z.record(z.any()).optional(),
      }),
    }),
  }),
]);

export type WebrtcResponse = z.infer<typeof WebrtcResponseSchema>;
