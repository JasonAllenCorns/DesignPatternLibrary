module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module'
    },
    plugins: [
        'ember-cleanup'
    ],
    extends: 'eslint:recommended',
    env: {
        'browser': true,
        'jquery': true // temporary
    },
    rules: {
        "no-console": "off",
        // 'array-callback-return': 2,
        'curly': 2,
        'dot-location': [2, 'property'],
        'dot-notation': [2],
        'eqeqeq': 2,
        'guard-for-in': 2,
        'indent': [2, 4, { 'SwitchCase': 1 } ],
        'new-cap': 2,
        'no-caller': 2,
        'no-eval': 2,
        // 'no-extra-parens': 2,
        'no-implied-eval': 2,
        'no-new': 2,
        // 'no-prototype-builtins': 2,
        'no-trailing-spaces': 2,
        'no-unsafe-finally': 2,
        'no-var': 2,
        // 'ember-cleanup/cp-brace-expansion': 2,
        // 'ember-cleanup/cp-macro-alias': 2,
        'ember-cleanup/cp-macro-not-key': 2,
        // 'ember-cleanup/destructuring': 2,
        'ember-cleanup/no-dup-keys': [2, { 'tryExpandKeys': true }],
        // 'ember-cleanup/no-empty-declaration': 2,
        // 'ember-cleanup/no-expr-in-dep-keys': 2,
        // 'ember-cleanup/no-is-array': 2,
        'ember-cleanup/no-multi-dots': 2,
        // 'ember-cleanup/no-settimeout': 2,
        // 'ember-cleanup/no-set-in-getter': 2,
        'ember-cleanup/no-this-in-dep-keys': 2,
        'ember-cleanup/one-level-each': 2,
        'ember-cleanup/square-brackets': 2,
    },
    globals: {
        'moment': true, // temporary
        'htmlsave': true
    }
};
