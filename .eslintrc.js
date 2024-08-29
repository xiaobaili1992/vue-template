module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:vue/vue3-essential', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'vue/multi-word-component-names': 0,
  },
};
