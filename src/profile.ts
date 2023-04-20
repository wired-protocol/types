import { z } from "zod";

export const ProfileSchema = z.object({
  name: z.string().optional(),
  bio: z.string().optional(),
  image: z.string().optional(),
  background: z.string().optional(),
  links: z
    .array(
      z.object({
        name: z.string().optional(),
        url: z.string(),
      })
    )
    .optional(),
  extras: z.record(z.string()).optional(),
});

export type Profile = z.infer<typeof ProfileSchema>;
