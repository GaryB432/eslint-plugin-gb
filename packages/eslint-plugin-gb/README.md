# eslint-plugin-gb

## Description

My favorite eslint configurations

## Installation

```
$ npm i --save-dev typescript
$ npm i --save-dev eslint
$ npm i --save-dev @typescript-eslint/parser
$ npm i --save-dev @typescript-eslint/eslint-plugin
$ npm i --save-dev eslint-plugin-gb
```

## Usage

```js
// .eslintrc.js

module.exports = {
  plugins: ['gb'],
  extends: ['plugin:gb/recommended'],
};
```

## `recommended` config

| Rule | Setting |
| --- | --- |
| [@typescript-eslint/explicit-member-accessibility](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md) | warn |
| [@typescript-eslint/explicit-module-boundary-types](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md) | warn |
| [@typescript-eslint/member-ordering](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md) | warn (with alphabetical ordering) |
| [@typescript-eslint/no-unused-vars](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md) | off |
