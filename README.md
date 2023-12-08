# eslint-plugin-gb

## Description

My favorite eslint configurations

## Installation

```
$ npm add typescript eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-gb -D
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

| Rule                                                                                                                    | Setting                           |
| ----------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| [@typescript-eslint/consistent-type-imports](https://typescript-eslint.io/rules/consistent-type-imports)                | warn                              |
| [@typescript-eslint/explicit-member-accessibility](https://typescript-eslint.io/rules/explicit-member-accessibility/)   | warn                              |
| [@typescript-eslint/explicit-module-boundary-types](https://typescript-eslint.io/rules/explicit-module-boundary-types/) | warn                              |
| [@typescript-eslint/member-ordering](https://typescript-eslint.io/rules/member-ordering/)                               | warn (with alphabetical ordering) |
| [@typescript-eslint/no-unused-vars](https://typescript-eslint.io/rules/no-unused-vars/)                                 | off                               |

## `recommended-type-checked` config

all of the `recommended` rules and also the following.

| Rule                                                                                                | Setting |
| --------------------------------------------------------------------------------------------------- | ------- |
| [@typescript-eslint/no-floating-promises](https://typescript-eslint.io/rules/no-floating-promises/) | warn    |
| [@typescript-eslint/unbound-method](https://typescript-eslint.io/rules/unbound-method/)             | error   |
