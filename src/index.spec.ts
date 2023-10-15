import plugin from './';

describe('eslintPluginGb', () => {
  it('should work', () => {
    expect(plugin.configs.recommended.plugins).toContain('gb');
    expect(
      plugin.configs.base.rules['@typescript-eslint/no-unused-vars']
    ).toEqual('off');
  });
});
