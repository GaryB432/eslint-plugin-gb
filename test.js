const plugin = require("./index");

describe("plugin", () => {
  it("has correct plugin names", () => {
    expect(Object.keys(plugin.configs).sort()).toEqual([
      "flat/base",
      "flat/recommended",
    ]);
  });

  it("has correct plugin names", () => {
    const rec = plugin.configs["flat/recommended"];
    expect(rec[0]).toEqual({
      name: "gb/recommended/rules",
      rules: expect.any(Object),
    });
  });
});
