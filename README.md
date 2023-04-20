# Types

Typescript types and zod schemas for The Wired.

## Installation

```bash
npm install @wired-protocol/types
```

## Usage

Use zod to validate unsafe objects. Useful when reading data from unknown sources, such as from a `world.json` file or messages from the host.

```typescript
import { WorldMetadataSchema } from "@wired-protocol/types";

const unsafeObject: any = {
  info: {
    name: "My World",
    description: "A description of the world.",
    image: "./image.jpg",
    host: "host.unavi.xyz",
  },
  model: "./world.gltf",
};

const metadata = WorldMetadataSchema.parse(unsafeObject);
//    ^? const metadata: WorldMetadata
```
