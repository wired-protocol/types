import { WorldInfoSchema, WorldMetadata, WorldMetadataSchema } from "./world";

const basicWorld: WorldMetadata = {
  info: {
    name: "Example World",
    description: "Example Description",
    image: "https://example.com/image.png",
    host: "example.com",
  },
  model: "https://example.com/model.gltf",
};

test("Validate info", () => {
  WorldInfoSchema.parse(basicWorld.info);
});

test("Validate metadata", () => {
  WorldMetadataSchema.parse(basicWorld);
});

test("Works with only model", () => {
  const world = { model: basicWorld.model };
  WorldMetadataSchema.parse(world);
});

test("Works with extras", () => {
  const world = {
    ...basicWorld,
    extras: { a: "a", b: 2, c: {} },
  };
  WorldMetadataSchema.parse(world);
});

test("Extras has to be an object", () => {
  const world = {
    ...basicWorld,
    extras: "a",
  };
  const parsed = WorldMetadataSchema.safeParse(world);
  expect(parsed.success && parsed.data.info?.extras === undefined);
});

test("Model can be a relative path", () => {
  const world = { model: "model.gltf" };
  WorldMetadataSchema.parse(world);
});

test("Model can be an IPFS URI", () => {
  const world = { model: "ipfs://QmWZv..." };
  WorldMetadataSchema.parse(world);
});
