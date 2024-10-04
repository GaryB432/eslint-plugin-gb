const flatBase = require("./configs/flat/base.js");
const flatRecommended = require("./configs/flat/recommended.js");

const pkg = require("./package.json");

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

module.exports = plugin;
