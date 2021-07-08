module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],

  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "no-restricted-syntax": ["error", "ForInStatement", "LabeledStatement", "WithStatement"]
  }
};
