const plugin = require("./index");

describe("plugin", () => {
  it("has correct plugin names", () => {
    expect(Object.keys(plugin.configs).sort()).toEqual([
      "flat/base",
      "flat/recommended",
    ]);
  });

  it("has correct config name", () => {
    const rec = plugin.configs["flat/recommended"];
    expect(rec[0]).toEqual({
      name: "gb/recommended/rules",
      rules: expect.any(Object),
    });
  });

  it("has correct plugin meta", () => {
    expect(plugin.meta).toEqual({
      name: "eslint-plugin-gb",
      version: expect.any(String),
    });
  });
});
