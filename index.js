import fs from "fs";

import flatRecommended from "./configs/flat/recommended.js";
import flatBase from "./configs/flat/base.js";

const pkg = JSON.parse(
  fs.readFileSync(new URL("./package.json", import.meta.url), "utf8")
);

const plugin = {
  meta: {
    name: pkg.name,
    version: pkg.version,
  },
  configs: {
    "flat/base": flatBase,
    "flat/recommended": flatRecommended,
  },
  rules: {},
  processors: {},
};

// Object.assign(plugin.configs, {
//   recommended: [
//     {
//       plugins: {
//         gb: plugin,
//       },
//       rules: {
//         "example/dollar-sign": "error",
//       },
//       languageOptions: {
//         globals: {
//           myGlobal: "readonly",
//         },
//         parserOptions: {
//           ecmaFeatures: {
//             jsx: true,
//           },
//         },
//       },
//     },
//   ],
// });

export default plugin;
