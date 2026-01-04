// @ts-check
import { readFileSync } from "fs";
import { base } from "./configs/base.js";
import { recommended } from "./configs/recommended.js";
import { ESLint } from "eslint";

const pkg = JSON.parse(
  readFileSync(new URL("./package.json", import.meta.url), "utf8"),
);

/** @type {ESLint.Plugin} */
const plugin = {
  meta: {
    name: pkg.name,
    version: pkg.version,
    namespace: "gb",
  },
  configs: {
    base,
    recommended,
  },
};

export default plugin;
