const cracoConfig = require('./craco.config.js');

const aliasMap = Object.entries(cracoConfig.webpack.alias);
console.info(aliasMap);

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: aliasMap,
        extensions: ['.js', '.jsx', '.scss'],
      },
    },
  },
  rules: {
    'import/extensions': ['error', 'ignorePackages'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'object-curly-newline': ['error', { multiline: true, consistent: true }],
    'no-unused-vars': 'warn',
  },
};
