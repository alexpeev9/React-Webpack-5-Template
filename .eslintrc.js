module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: [
    'react',
    'eslint-plugin-import',
    'plugin:prettier/recommended',
    'prettier'
  ],
  rules: { 'react/react-in-jsx-scope': 'off' }
}
