/* eslint-disable @typescript-eslint/no-var-requires */

const orderingRule =
  require('@typescript-eslint/eslint-plugin/dist/rules/member-ordering') as {
    defaultOrder: unknown;
  };

module.exports = {
  configs: {
    base: {
      env: {
        node: true,
        es2021: true,
      },
      plugins: ['@typescript-eslint'],
      extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/explicit-member-accessibility': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'warn',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/member-ordering': [
          'warn',
          {
            default: {
              memberTypes: orderingRule.defaultOrder,
              order: 'alphabetically',
            },
          },
        ],
        '@typescript-eslint/consistent-type-imports': 'warn',
      },
    },
    recommended: {
      plugins: ['gb'],
      extends: ['plugin:gb/base'],
    },
    'recommended-with-type-checking': {
      plugins: ['gb'],
      extends: ['plugin:gb/recommended'],
      rules: {
        '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
        '@typescript-eslint/no-floating-promises': 'warn',
      },
    },
    all: {
      env: {
        node: true,
        es2021: true,
        jest: true,
      },
      plugins: ['@typescript-eslint', 'jest'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
      ],
      overrides: [
        {
          files: ['**/*.spec.ts'],
          rules: {
            '@typescript-eslint/unbound-method': 'off',
            'jest/unbound-method': 'error',
          },
        },
      ],
      rules: {
        'prettier/prettier': 'warn',
        '@typescript-eslint/explicit-member-accessibility': 'warn',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/member-ordering': [
          'warn',
          {
            default: {
              memberTypes: orderingRule.defaultOrder,
              order: 'alphabetically',
            },
          },
        ],
      },
    },
  },
};
