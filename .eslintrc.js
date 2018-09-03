module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    "linebreak-style": "off",
            indent: ["error", 2, {
              VariableDeclarator: {
                var: 2,
                let: 2,
                const: 3
              }
            }],
            quotes: ["error", "single", {
              "allowTemplateLiterals": true
            }],
            "semi": ["error", "always"],
            "func-style": ["error", "declaration"],
            "no-console": ["error", { allow: ["info", "warn", "error", "log"] }],
            "space-before-function-paren": ["error", "always"],
            "no-constant-condition": "warn",
            "curly": ["error", "multi-line"],
            "no-var": "warn",
            "object-curly-spacing": ["error", "always"],
            "no-multiple-empty-lines": ["error", {
              "max": 1,
              "maxEOF": 0
            }],
            "max-len": ["error", 120],
            "no-use-before-define": "warn",
            "no-magic-numbers": "off",
            "arrow-parens": ["error", "as-needed"],
            "max-params": ["error", 4],
            "new-cap": ["error", {
              "properties": false
            }],
            "eol-last": ["error", "always"],
            "no-multi-spaces": ["error", {
              exceptions: {
                "VariableDeclarator": true,
                "ImportDeclaration": true
              }
            }],
            "one-var-declaration-per-line": ["error", "always"],
            "one-var": "off",
            "max-nested-callbacks": ["error", 4],
            "valid-jsdoc": ["error", {
              "requireReturnDescription": false
            }],
            "consistent-return": "off",
            "global-require": "error",
            "no-extra-parens": "error",
        
            // don't require .vue extension when importing
            'import/extensions': ['error', 'always', {
              js: 'never',
              vue: 'never'
            }],
            // disallow reassignment of function parameters
            // disallow parameter object manipulation except for specific exclusions
            'no-param-reassign': ['error', {
              props: true,
              ignorePropertyModificationsFor: [
                'element',
                'state', // for vuex state
                'acc', // for reduce accumulators
                'e' // for e.returnvalue
              ]
            }],
            // allow optionalDependencies
            'import/no-extraneous-dependencies': ['error', {
              optionalDependencies: ['test/unit/index.js']
            }],
            // allow debugger during development
            'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
            // allow underscore
            'no-underscore-dangle': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}