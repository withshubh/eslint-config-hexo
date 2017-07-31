module.exports = {
  extends: 'eslint:recommended',
  rules: {
    'curly': ['error', 'multi-line'],
    'no-console': 'off',
    'no-path-concat': 'error',
    'handle-callback-err': 'error',
    'no-use-before-define': ['error', 'nofunc'],
    'no-shadow-restricted-names': 'error',
    'block-scoped-var': 'error',
    'dot-notation': 'error',
    'eqeqeq': ['error', 'allow-null'],
    'no-else-return': 1,
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-implied-eval': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-native-reassign': 'error',
    'no-new-wrappers': 'error',
    'no-redeclare': 'error',
    'no-return-assign': 'error',
    'no-throw-literal': 'error',
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: true
    }],
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-with': 'error',
    'radix': 'error',
    'no-self-compare': 'error',
    'no-unused-vars': ['error', {
      vars: 'all',
      args: 'none'
    }],
    'indent': ['error', 2, {
      SwitchCase: 1
    }],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'no-empty': ['error', {
      allowEmptyCatch: true
    }],
    'brace-style': ['error', '1tbs', {
      allowSingleLine: true
    }],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multiple-empty-lines': 'error',
    'no-multi-str': 'error',
    'one-var': ['error', {
      uninitialized: 'always',
      initialized: 'never'
    }],
    'dot-location': ['error', 'property'],
    'operator-linebreak': ['error', 'before'],
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true
    }],
    'space-unary-ops': ['error', {
      words: false,
      nonwords: false
    }],
    'comma-spacing': ['error', {
      before: false,
      after: true
    }],
    'semi-spacing': ['error', {
      before: false,
      after: true
    }],
    'no-spaced-func': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never', {
      exceptions: ['{}']
    }],
    'comma-dangle': ['error', 'never'],
    'no-trailing-spaces': 'error',
    'yoda': ['error', 'never'],
    'comma-style': ['error', 'last'],
    'curly': ['error', 'all'],
    'dot-notation': 'error',
    'eol-last': 'error',
    'wrap-iife': 'error',
    'space-infix-ops': 'error',
    'keyword-spacing': ['error', {}],
    'space-before-blocks': ['error', 'always']
  },
  env: {
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6
  }
};
