import memberOrder from "../member-order.js";

export default [
  {
    name: "gb/base/rules",
    rules: {
      "@typescript-eslint/explicit-member-accessibility": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "warn",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/member-ordering": [
        "warn",
        {
          default: {
            memberTypes: memberOrder,
            order: "alphabetically",
          },
        },
      ],
      "@typescript-eslint/consistent-type-imports": "warn",
    },
  },
];