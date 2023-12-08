import memberOrder from './member-order';

// import * as asdf from '@typescript-eslint/eslint-plugin/dist/rules/'
import { TSESLint } from '@typescript-eslint/utils';

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
              memberTypes: memberOrder,
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
    'recommended-type-checked': {
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
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
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
              memberTypes: memberOrder,
              order: 'alphabetically',
            },
          },
        ],
      },
    },
  },
};
