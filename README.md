# Types

Typescript types and zod schemas for The Wired.

## Installation

```bash
pnpm install @wired-protocol/types
```

## Usage

Use zod to validate unsafe objects. Useful when reading data from unknown sources, such as from a `world.json` file or messages from the host.

```typescript
import { WorldMetadataSchema } from "@wired-protocol/types";

const unsafeObject: any = {
  info: {
    name: "My World",
    description: "A very cool world.",
    authors: ["@alice:unavi.xyz"],
    image: "./image.jpg",
    host: "host.unavi.xyz",
  },
  model: "./world.gltf",
  unknownField: "This field is not part of the schema.",
};

// Validate the object against the schema.
// `unknownField` will be stripped from the object.
const metadata = WorldMetadataSchema.parse(unsafeObject);
```
