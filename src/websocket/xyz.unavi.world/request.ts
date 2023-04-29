import { z } from "zod";

export const XyzUnaviWorldRequestSchema = z.union([
  z.object({
    id: z.literal("xyz.unavi.world.join"),
    data: z.string(),
  }),
  z.object({
    id: z.literal("xyz.unavi.world.leave"),
    data: z.string(),
  }),
  z.object({
    id: z.literal("xyz.unavi.world.chat.send"),
    data: z.string(),
  }),
  z.object({
    id: z.literal("xyz.unavi.world.user.avatar"),
    data: z.string().nullable(),
  }),
  z.object({
    id: z.literal("xyz.unavi.world.user.handle"),
    data: z.string().nullable(),
  }),
  z.object({
    id: z.literal("xyz.unavi.world.user.name"),
    data: z.string().nullable(),
  }),
  z.object({
    id: z.literal("xyz.unavi.world.user.grounded"),
    data: z.boolean(),
  }),
]);

export type XyzUnaviWorldRequest = z.infer<typeof XyzUnaviWorldRequestSchema>;
