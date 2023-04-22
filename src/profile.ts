import { z } from "zod";

export const ProfileMetadataSchema = z.object({
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

export type ProfileMetadata = z.infer<typeof ProfileMetadataSchema>;
