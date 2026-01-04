import { ESLint } from "eslint";
import memberOrder from "../member-order.js";
import { base } from "./base.js";

/** @type {ESLint.ConfigData} */
export const recommended = {
  ...base,
  rules: {
    "@typescript-eslint/member-ordering": [
      "warn",
      {
        default: {
          memberTypes: memberOrder,
          order: "alphabetically",
        },
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "warn",
    "@typescript-eslint/no-unused-vars": "off",
  },
};
