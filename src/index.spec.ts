import plugin from './';

describe('eslintPluginGb', () => {
  it('should work', () => {
    expect(plugin.configs.base.rules).toMatchObject({
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/explicit-member-accessibility': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
      '@typescript-eslint/member-ordering': [
        'warn',
        {
          default: {
            memberTypes: [],
            order: 'alphabetically',
          },
        },
      ],
      '@typescript-eslint/no-unused-vars': 'off',
    });
  });
});
