module.exports = {
  extends: ['eslint:recommended', 'plugin:node/recommended'],
  plugins: ['node'],
  rules: {
    // override recomennded
    'no-console': 'off',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-unused-vars': ['error', { args: 'none' }],
    // Possible Errors
    'no-extra-parens': ['error', 'all', {
      conditionalAssign: false,
      returnAssign: false,
      nestedBinaryExpressions: false
    }],
    // Best Practices
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'curly': ['error', 'multi-line'],
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'eqeqeq': ['error', 'allow-null'],
    'no-else-return': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: true
    }],
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-proto': 'error',
    'no-return-assign': 'error',
    'no-void': 'error',
    'no-with': 'error',
    'prefer-promise-reject-errors': 'error',
    'radix': 'error',
    'wrap-iife': 'error',
    'yoda': ['error', 'never'],
    // Strict Mode
    'strict': 'error',
    // Variables
    'no-label-var': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef-init': 'error',
    'no-use-before-define': ['error', 'nofunc'],
    // Node.js and CommonJS
    'handle-callback-err': 'error',
    'no-mixed-operators': 'error',
    'no-path-concat': 'error',
    // Stylistic Issues
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', {
      before: false,
      after: true
    }],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'eol-last': 'error',
    'func-call-spacing': 'error',
    'indent': ['error', 2, { SwitchCase: 1 }],
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true
    }],
    'keyword-spacing': ['error', {}],
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': ['error', { beforeBlockComment: true }],
    'new-cap': 'error',
    'new-parens': 'error',
    'no-array-constructor': 'error',
    'no-extra-label': 'error',
    'no-multiple-empty-lines': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'one-var': ['error', {
      uninitialized: 'always',
      initialized: 'never'
    }],
    'operator-linebreak': ['error', 'before'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'semi-spacing': ['error', {
      before: false,
      after: true
    }],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', {
      words: false,
      nonwords: false
    }],
    'spaced-comment': ['error', 'always'],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    // ECMAScript 6
    'arrow-spacing': 'error',
    'generator-star-spacing': ['error', 'after'],
    'no-confusing-arrow': ['error', { allowParens: true }],
    'no-duplicate-imports': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'template-curly-spacing': ['error', 'never'],
    'yield-star-spacing': ['error', 'after']
  },
  env: {
    node: true,
    es6: true
  }
};
