module.exports = {
  root: true,
  parserOptions: {
    project: ['tsconfig.json'],
  },
  plugins: ['gb'],
  extends: ['plugin:gb/recommended-with-type-checking'],
};