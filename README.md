# eslint-plugin-gb

## Description

My favorite eslint configurations for [ESLint >=9](https://eslint.org/docs/latest/use/migrate-to-9.0.0). A version for earlier ESLint releases in available on [eslint-plugin-gb@2](https://www.npmjs.com/package/eslint-plugin-gb/v/2.0.0).

## Installation

```shell
npm add --save-dev typescript
npm add --save-dev eslint
npm add --save-dev @typescript-eslint/parser
npm add --save-dev @typescript-eslint/eslint-plugin
npm add --save-dev eslint-plugin-gb

```

## Usage

see [Configuration Files - ESLint - Pluggable JavaScript Linter](https://eslint.org/docs/latest/use/configure/configuration-files) for detailed information. For the basics add the `eslint.config.*js` to the root of your project.

```cjs
// eslint.config.cjs
const js = require("@eslint/js");
const gb = require("eslint-plugin-gb");

module.exports = [
  ...js.configs.recommended,
  ...gb.configs["recommended"],
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    // Override or add rules here
    rules: {},
  },
];
```

```mjs
// eslint.config.mjs
import js from "@eslint/js";
import gb from "eslint-plugin-gb";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  tseslint.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js, gb },
    extends: ["js/recommended", "gb/recommended"],
    // Override or add rules here
    rules: {},
  },
]);
```

## `recommended` config

<!-- prettier-ignore -->
| Rule  | Setting |
| --- | --- |
| [@typescript-eslint/consistent-type-imports](https://typescript-eslint.io/rules/consistent-type-imports) | warn |
| [@typescript-eslint/explicit-member-accessibility](https://typescript-eslint.io/rules/explicit-member-accessibility/) | warn |
| [@typescript-eslint/explicit-module-boundary-types](https://typescript-eslint.io/rules/explicit-module-boundary-types/) | warn |
| [@typescript-eslint/member-ordering](https://typescript-eslint.io/rules/member-ordering/) | warn (with alphabetical ordering and [strict rules](./lib/member-order.js).) |
| [@typescript-eslint/no-unused-vars](https://typescript-eslint.io/rules/no-unused-vars/) | off |

## development

This is a bare-bones library. There are no npm scripts or monorepo plugins. `npx prettier . -w` works ok.

## eslint-plugin-gb & eslint Compatibility Chart

| eslint-plugin-gb version | eslint version |
| ------------------------ | -------------- |
| ^9.2.0                   | >=9.9.0        |
| ^2.0.0                   | <9.0.0         |
