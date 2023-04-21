import { z } from "zod";

export const WebRTCDtlsParametersSchema = z.object({
  role: z.enum(["auto", "client", "server"]).optional(),
  fingerprints: z
    .array(
      z.object({
        algorithm: z.string(),
        value: z.string(),
      })
    )
    .min(1),
});

export type WebRTCDtlsParameters = z.infer<typeof WebRTCDtlsParametersSchema>;

export const WebRTCIceCandidateSchema = z.object({
  foundation: z.string(),
  priority: z.number().int().min(0).max(4294967295),
  ip: z.string().ip({ version: "v4" }),
  port: z.number().int().min(0).max(65535),
  protocol: z.enum(["udp", "tcp"]),
  type: z.enum(["host", "srflx", "prflx", "relay"]),
  tcpType: z.enum(["active", "passive", "so"]).optional(),
});

export type WebRTCIceCandidate = z.infer<typeof WebRTCIceCandidateSchema>;

export const WebRTCRtpCapabilitiesSchema = z.object({
  codecs: z
    .array(
      z.object({
        kind: z.enum(["audio", "video"]),
        mimeType: z.string(),
        clockRate: z.number().int().min(8000).max(96000),
        channels: z.number().int().min(1).max(2).optional(),
        rtcpFeedback: z
          .array(
            z.object({
              type: z.string(),
              parameter: z.string().optional(),
            })
          )
          .optional(),
        parameters: z.record(z.any()).optional(),
      })
    )
    .optional(),
  headerExtensions: z
    .array(
      z.object({
        uri: z.string(),
        kind: z.enum(["audio", "video"]),
        preferredId: z.number().int().min(1).max(255),
        preferredEncrypt: z.boolean().optional(),
        direction: z
          .enum(["sendrecv", "sendonly", "recvonly", "inactive"])
          .optional(),
      })
    )
    .optional(),
});

export type WebRTCRtpCapabilities = z.infer<typeof WebRTCRtpCapabilitiesSchema>;

export const WebRTCRtpParametersSchema = z.object({
  codecs: z.array(
    z.object({
      mimeType: z.string(),
      payloadType: z.number().int().min(0).max(127),
      clockRate: z.number().int().min(8000).max(96000),
      channels: z.number().int().min(1).max(2).optional(),
      parameters: z.record(z.any()).optional(),
    })
  ),
  headerExtensions: z
    .array(
      z.object({
        uri: z.string(),
        id: z.number().int().min(1).max(255),
      })
    )
    .optional(),
});

export type WebRTCRtpParameters = z.infer<typeof WebRTCRtpParametersSchema>;

export const WebRTCSctpParametersSchema = z.object({
  port: z.number().int().min(1).max(65535),
  maxMessageSize: z.number().int().min(0).optional(),
  maxRetransmits: z.number().int().min(0).optional(),
  negotiated: z.boolean().optional(),
  streamReset: z.boolean().optional(),
  partialReliability: z
    .object({
      allowed: z.boolean(),
      maxPacketLifeTime: z.number().int().min(0).optional(),
      maxRetransmits: z.number().int().min(0).optional(),
    })
    .optional(),
});

export type WebRTCSctpParameters = z.infer<typeof WebRTCSctpParametersSchema>;

export const WebRTCSctpStreamParametersSchema = z.object({
  streamId: z.number().int().min(0).max(65535).optional(),
  ordered: z.boolean().optional(),
  maxPacketLifeTime: z.number().int().min(1).optional(),
  maxRetransmits: z.number().int().min(1).optional(),
  protocol: z.string().optional(),
});

export type WebRTCSctpStreamParameters = z.infer<
  typeof WebRTCSctpStreamParametersSchema
>;
