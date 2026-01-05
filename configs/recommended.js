import { memberOrder } from "../lib/member-order.js";
import { base } from "./base.js";

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
