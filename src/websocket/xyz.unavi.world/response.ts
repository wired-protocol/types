import { z } from "zod";

import { PlayerIdSchema } from "../common";

export const XyzUnaviWorldResponseSchema = z.union([
  z.object({
    id: z.literal("xyz.unavi.world.joined"),
    data: PlayerIdSchema,
  }),
  z.object({
    id: z.literal("xyz.unavi.world.chat.message"),
    data: z.object({
      playerId: PlayerIdSchema,
      message: z.string(),
    }),
  }),
  z.object({
    id: z.literal("xyz.unavi.world.player.avatar"),
    data: z.object({
      playerId: PlayerIdSchema,
      avatar: z.string().nullable(),
    }),
  }),
  z.object({
    id: z.literal("xyz.unavi.world.player.handle"),
    data: z.object({
      playerId: PlayerIdSchema,
      handle: z.string().nullable(),
    }),
  }),
  z.object({
    id: z.literal("xyz.unavi.world.player.name"),
    data: z.object({
      playerId: PlayerIdSchema,
      name: z.string().nullable(),
    }),
  }),
  z.object({
    id: z.literal("xyz.unavi.world.player.grounded"),
    data: z.object({
      playerId: PlayerIdSchema,
      grounded: z.boolean(),
    }),
  }),
  z.object({
    id: z.literal("xyz.unavi.world.player.join"),
    data: z.object({
      playerId: PlayerIdSchema,
      avatar: z.string().optional(),
      handle: z.string().optional(),
      name: z.string().optional(),
    }),
  }),
  z.object({
    id: z.literal("xyz.unavi.world.player.leave"),
    data: PlayerIdSchema,
  }),
]);

export type XyzUnaviWorldResponse = z.infer<typeof XyzUnaviWorldResponseSchema>;
