/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/base",
    "@typescript-eslint/parser",
  ],
  overrides: [],
  //   parser: "@typescript-eslint/parser",
  parser: ["vue-eslint-parser", "@typescript-eslint/parser"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "vue/multi-word-component-names": "off",
  },
};
