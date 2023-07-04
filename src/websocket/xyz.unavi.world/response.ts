import { z } from "zod";

import { PlayerIdSchema } from "../common";

export const WorldJoinedSchema = z.object({
  id: z.literal("xyz.unavi.world.joined"),
  data: PlayerIdSchema,
});
export type WorldJoined = z.infer<typeof WorldJoinedSchema>;

export const WorldChatMessageSchema = z.object({
  id: z.literal("xyz.unavi.world.chat.message"),
  data: z.object({
    playerId: PlayerIdSchema,
    message: z.string(),
  }),
});
export type WorldChatMessage = z.infer<typeof WorldChatMessageSchema>;

export const WorldPlayerAvatarSchema = z.object({
  id: z.literal("xyz.unavi.world.player.avatar"),
  data: z.object({
    playerId: PlayerIdSchema,
    avatar: z.string().nullable(),
  }),
});
export type WorldPlayerAvatar = z.infer<typeof WorldPlayerAvatarSchema>;

export const WorldPlayerHandleSchema = z.object({
  id: z.literal("xyz.unavi.world.player.handle"),
  data: z.object({
    playerId: PlayerIdSchema,
    handle: z.string().nullable(),
  }),
});
export type WorldPlayerHandle = z.infer<typeof WorldPlayerHandleSchema>;

export const WorldPlayerNameSchema = z.object({
  id: z.literal("xyz.unavi.world.player.name"),
  data: z.object({
    playerId: PlayerIdSchema,
    name: z.string().nullable(),
  }),
});
export type WorldPlayerName = z.infer<typeof WorldPlayerNameSchema>;

export const WorldPlayerFallingSchema = z.object({
  id: z.literal("xyz.unavi.world.player.falling"),
  data: z.object({
    playerId: PlayerIdSchema,
    falling: z.boolean(),
  }),
});
export type WorldPlayerFalling = z.infer<typeof WorldPlayerFallingSchema>;

export const WorldPlayerJoinSchema = z.object({
  id: z.literal("xyz.unavi.world.player.join"),
  data: z.object({
    playerId: PlayerIdSchema,
    avatar: z.string().optional(),
    handle: z.string().optional(),
    name: z.string().optional(),
  }),
});
export type WorldPlayerJoin = z.infer<typeof WorldPlayerJoinSchema>;

export const WorldPlayerLeaveSchema = z.object({
  id: z.literal("xyz.unavi.world.player.leave"),
  data: PlayerIdSchema,
});
export type WorldPlayerLeave = z.infer<typeof WorldPlayerLeaveSchema>;

export const WorldResponseSchema = z.union([
  WorldJoinedSchema,
  WorldChatMessageSchema,
  WorldPlayerAvatarSchema,
  WorldPlayerHandleSchema,
  WorldPlayerNameSchema,
  WorldPlayerFallingSchema,
  WorldPlayerJoinSchema,
  WorldPlayerLeaveSchema,
]);

export type WorldResponse = z.infer<typeof WorldResponseSchema>;
