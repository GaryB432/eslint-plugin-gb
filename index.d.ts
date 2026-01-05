import type { Linter } from "eslint";

export declare const gb: {
  readonly meta: {
    readonly name: string;
    readonly version: string;
    readonly namespace: "gb";
  };
  readonly configs: {
    readonly recommended: { readonly rules: Readonly<Linter.RulesRecord> };
    readonly base: { readonly rules: Readonly<Linter.RulesRecord> };
  };
};
