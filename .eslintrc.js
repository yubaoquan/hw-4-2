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
    'no-console': 'off',
    'no-continue': 'off',
    'no-loop-func': 'off',
    'import/extensions': 'off',
    'consistent-return': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'brace-style': ['error', '1tbs'],
    'react/jsx-curly-spacing': ['error', { when: 'never', attributes: true, children: true }],
    'no-param-reassign': ['error', { props: false }],
    'max-statements-per-line': ['error', { max: 1 }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'tsx'] }],
    'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
    'import/order': ['error', {
      alphabetize: { order: 'asc', caseInsensitive: true },
      groups: [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
        'object',
      ],
      'newlines-between': 'never',
    }],
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: true,
        },
      },
      { enforceForRenamedProperties: false },
    ],

    'lines-around-comment': ['error', {
      allowArrayStart: true,
      allowBlockStart: true,
      allowClassStart: true,
      allowObjectStart: true,
      beforeBlockComment: true,
      beforeLineComment: true,
    }],

    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'class', next: '*' },
      { blankLine: 'always', prev: '*', next: 'class' },
      { blankLine: 'always', prev: 'function', next: '*' },
      { blankLine: 'always', prev: '*', next: 'function' },
      { blankLine: 'always', prev: '*', next: 'export' },
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'any', prev: 'import', next: 'import' },
      { blankLine: 'any', prev: 'export', next: 'export' },
    ],
  },
};
