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

| Rule                                                                                                                      | Setting                           |
| ------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| [@typescript-eslint/consistent-type-imports](https://typescript-eslint.io/rules/consistent-type-imports)                  | warn                              |
| [@typescript-eslint/explicit-member-accessibility](https://typescript-eslint.io/rules/explicit-member-accessibility.md)   | warn                              |
| [@typescript-eslint/explicit-module-boundary-types](https://typescript-eslint.io/rules/explicit-module-boundary-types.md) | warn                              |
| [@typescript-eslint/member-ordering](https://typescript-eslint.io/rules/member-ordering.md)                               | warn (with alphabetical ordering) |
| [@typescript-eslint/no-floating-promises](https://typescript-eslint.io/rules/no-floating-promises.md)                     | warn                              |
| [@typescript-eslint/no-unused-vars](https://typescript-eslint.io/rules/no-unused-vars.md)                                 | off                               |

## `recommended-with-type-checking` config

all of the `recommended` rules and also the following.

| Rule                                                                                      | Setting |
| ----------------------------------------------------------------------------------------- | ------- |
| [@typescript-eslint/unbound-method](https://typescript-eslint.io/rules/unbound-method.md) | error   |
