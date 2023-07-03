import { z } from "zod";

export const WorldJoinSchema = z.object({
  id: z.literal("xyz.unavi.world.join"),
  data: z.string(),
});
export type WorldJoin = z.infer<typeof WorldJoinSchema>;

export const WorldLeaveSchema = z.object({
  id: z.literal("xyz.unavi.world.leave"),
  data: z.string(),
});
export type WorldLeave = z.infer<typeof WorldLeaveSchema>;

export const WorldChatSendSchema = z.object({
  id: z.literal("xyz.unavi.world.chat.send"),
  data: z.string(),
});
export type WorldChatSend = z.infer<typeof WorldChatSendSchema>;

export const WorldUserAvatarSchema = z.object({
  id: z.literal("xyz.unavi.world.user.avatar"),
  data: z.string().nullable(),
});
export type WorldUserAvatar = z.infer<typeof WorldUserAvatarSchema>;

export const WorldUserHandleSchema = z.object({
  id: z.literal("xyz.unavi.world.user.handle"),
  data: z.string().nullable(),
});
export type WorldUserHandle = z.infer<typeof WorldUserHandleSchema>;

export const WorldUserNameSchema = z.object({
  id: z.literal("xyz.unavi.world.user.name"),
  data: z.string().nullable(),
});
export type WorldUserName = z.infer<typeof WorldUserNameSchema>;

export const WorldUserGroundedSchema = z.object({
  id: z.literal("xyz.unavi.world.user.grounded"),
  data: z.boolean(),
});
export type WorldUserGrounded = z.infer<typeof WorldUserGroundedSchema>;

export const WorldRequestSchema = z.union([
  WorldJoinSchema,
  WorldLeaveSchema,
  WorldChatSendSchema,
  WorldUserAvatarSchema,
  WorldUserHandleSchema,
  WorldUserNameSchema,
  WorldUserGroundedSchema,
]);
export type WorldRequest = z.infer<typeof WorldRequestSchema>;
