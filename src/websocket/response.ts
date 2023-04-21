import { z } from "zod";
import {
  WebRTCDtlsParametersSchema,
  WebRTCRtpParametersSchema,
  WebRTCSctpStreamParametersSchema,
  WebRTCRtpCapabilitiesSchema,
  WebRTCIceCandidateSchema,
} from "./webrtc";

export const PlayerIdSchema = z.number().int().min(0).max(255);

export type PlayerId = z.infer<typeof PlayerIdSchema>;

export const ResponseMessageSchema = z.union([
  z.object({
    type: z.literal("join_success"),
    data: PlayerIdSchema,
  }),
  z.object({
    type: z.literal("chat_message"),
    data: z.object({
      playerId: PlayerIdSchema,
      message: z.string(),
    }),
  }),
  z.object({
    type: z.literal("player_avatar"),
    data: z.object({
      playerId: PlayerIdSchema,
      avatar: z.string().nullable(),
    }),
  }),
  z.object({
    type: z.literal("player_grounded"),
    data: z.object({
      playerId: PlayerIdSchema,
      grounded: z.boolean(),
    }),
  }),
  z.object({
    type: z.literal("player_join"),
    data: z.object({
      playerId: PlayerIdSchema,
      name: z.string().optional(),
      avatar: z.string().optional(),
    }),
  }),
  z.object({
    type: z.literal("player_leave"),
    data: PlayerIdSchema,
  }),
  z.object({
    type: z.literal("player_name"),
    data: z.object({
      playerId: PlayerIdSchema,
      name: z.string().nullable(),
    }),
  }),
  z.object({
    type: z.literal("webrtc_create_consumer"),
    data: z.object({
      playerId: PlayerIdSchema,
      consumerId: z.string(),
      producerId: z.string(),
      rtpParameters: WebRTCRtpParametersSchema,
    }),
  }),
  z.object({
    type: z.literal("webrtc_create_data_consumer"),
    data: z.object({
      playerId: PlayerIdSchema,
      dataConsumerId: z.string(),
      dataProducerId: z.string(),
      sctpStreamParameters: WebRTCSctpStreamParametersSchema,
    }),
  }),
  z.object({
    type: z.literal("webrtc_producer_id"),
    data: z.string(),
  }),
  z.object({
    type: z.literal("webrtc_data_producer_id"),
    data: z.string(),
  }),
  z.object({
    type: z.literal("webrtc_rtp_capabilities"),
    data: WebRTCRtpCapabilitiesSchema,
  }),
  z.object({
    type: z.literal("webrtc_transport_created"),
    data: z.object({
      type: z.union([z.literal("producer"), z.literal("consumer")]),
      options: z.object({
        id: z.string(),
        iceParameters: z.object({
          usernameFragment: z.string(),
          password: z.string(),
        }),
        iceCandidates: z.array(WebRTCIceCandidateSchema),
        dtlsParameters: WebRTCDtlsParametersSchema,
        sctpParameters: z
          .object({
            port: z.number().int().min(0).max(65535),
            OS: z.number().int().min(0).max(65535),
            MIS: z.number().int().min(0).max(65535),
            maxMessageSize: z.number().int().min(0).max(65535),
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

export type ResponseMessage = z.infer<typeof ResponseMessageSchema>;
