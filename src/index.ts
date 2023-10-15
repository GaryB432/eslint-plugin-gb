// const orderingRule =
//   require('@typescript-eslint/eslint-plugin/dist/rules/member-ordering') as {
//     defaultOrder: unknown;
//   };

// module.exports = {};

const defaultOrder: string[] = [
  // Index signature
  'signature',
  'call-signature',
  // Fields
  'public-static-field',
  'protected-static-field',
  'private-static-field',
  '#private-static-field',
  'public-decorated-field',
  'protected-decorated-field',
  'private-decorated-field',
  'public-instance-field',
  'protected-instance-field',
  'private-instance-field',
  '#private-instance-field',
  'public-abstract-field',
  'protected-abstract-field',
  'public-field',
  'protected-field',
  'private-field',
  '#private-field',
  'static-field',
  'instance-field',
  'abstract-field',
  'decorated-field',
  'field',
  // Static initialization
  'static-initialization',
  // Constructors
  'public-constructor',
  'protected-constructor',
  'private-constructor',
  'constructor',
  // Getters
  'public-static-get',
  'protected-static-get',
  'private-static-get',
  '#private-static-get',
  'public-decorated-get',
  'protected-decorated-get',
  'private-decorated-get',
  'public-instance-get',
  'protected-instance-get',
  'private-instance-get',
  '#private-instance-get',
  'public-abstract-get',
  'protected-abstract-get',
  'public-get',
  'protected-get',
  'private-get',
  '#private-get',
  'static-get',
  'instance-get',
  'abstract-get',
  'decorated-get',
  'get',
  // Setters
  'public-static-set',
  'protected-static-set',
  'private-static-set',
  '#private-static-set',
  'public-decorated-set',
  'protected-decorated-set',
  'private-decorated-set',
  'public-instance-set',
  'protected-instance-set',
  'private-instance-set',
  '#private-instance-set',
  'public-abstract-set',
  'protected-abstract-set',
  'public-set',
  'protected-set',
  'private-set',
  '#private-set',
  'static-set',
  'instance-set',
  'abstract-set',
  'decorated-set',
  'set',
  // Methods
  'public-static-method',
  'protected-static-method',
  'private-static-method',
  '#private-static-method',
  'public-decorated-method',
  'protected-decorated-method',
  'private-decorated-method',
  'public-instance-method',
  'protected-instance-method',
  'private-instance-method',
  '#private-instance-method',
  'public-abstract-method',
  'protected-abstract-method',
  'public-method',
  'protected-method',
  'private-method',
  '#private-method',
  'static-method',
  'instance-method',
  'abstract-method',
  'decorated-method',
  'method',
];

export default {
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
              memberTypes: defaultOrder,
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
              memberTypes: defaultOrder,
              order: 'alphabetically',
            },
          },
        ],
      },
    },
  },
};
