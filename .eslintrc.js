module.exports = {
root: false,
env: {
  node: false,
},
extends: [
  'plugin:vue/essential',
  '@vue/airbnb',
],
rules: {
  'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  'indent': [2, 4],
  'comma-dangle': [2, 'never'],
  'prefer-template': [0],
  'no-new': [0],
  'no-confusing-arrow': [0],
  'no-lonely-if': [0]
},
parserOptions: {
  parser: 'babel-eslint',
},
};
