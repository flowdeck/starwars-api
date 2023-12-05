/* eslint-env node */
module.exports = {
    root: true,
    'extends': [
        'eslint:recommended',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    env: {
        'browser': true,
        'amd': true,
        'node': true,
        'es6': true
    },
    rules: {

        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'semi': ['error', 'never'],
        //* 'indent': ['error', 4], // seems to conflict with vscode formatting
        'no-unused-vars': ['warn', {
            'vars': 'all',
            'args': 'after-used',
            'ignoreRestSiblings': false
        }],
        'quotes': ['error', 'single'],
        'object-curly-spacing': ['error', 'always', { 'objectsInObjects': true }],

        'object-property-newline': ['error', { 'allowAllPropertiesOnSameLine': false }],
        'no-multiple-empty-lines': ['error', {
            'max': 1,
            'maxEOF': 1
        }],

    }
}
