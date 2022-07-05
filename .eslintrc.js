module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'arrow-body-style': 0,
        'jsx-a11y/label-has-for': 0,
        'max-lines-per-function': [
            2,
            { max: 320, skipComments: true, skipBlankLines: true },
        ],
        'no-confusing-arrow': 0,
        'no-nested-ternary': 0,
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-param-reassign': [
            2,
            { props: true, ignorePropertyModificationsFor: ['draft'] },
        ],
        'react/no-this-in-sfc': 0,
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'no-constant-condition': ['error', { checkLoops: false }],
    },
};
