import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import react from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default [
    ...fixupConfigRules(
        compat.extends('eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:prettier/recommended')
    ),
    {
        plugins: {
            react: fixupPluginRules(react),
            prettier: fixupPluginRules(prettier),
        },

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },

            ecmaVersion: 'latest',
            sourceType: 'module',

            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },

        settings: {
            react: {
                version: 'detect',
            },
        },

        rules: {
            'no-console': 'error',
            'prettier/prettier': 'error',
            quotes: ['error', 'single'],
            'react/jsx-uses-vars': 'error',
            semi: ['error', 'always'],
            'linebreak-style': ['error', 'unix'],
            'no-var': 'error',

            'no-unused-vars': [
                'error',
                {
                    vars: 'all',
                    args: 'after-used',
                    ignoreRestSiblings: false,
                },
            ],

            'no-restricted-syntax': [
                'error',
                {
                    selector: 'FunctionDeclaration',
                    message: 'Use arrow functions',
                },
            ],

            'react/no-unknown-property': 'error',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',

            'react/jsx-no-bind': [
                'error',
                {
                    allowArrowFunctions: true,
                    allowBind: false,
                    ignoreRefs: true,
                },
            ],

            'react/prop-types': 'off',

            'react/jsx-max-props-per-line': [
                'error',
                {
                    maximum: 10,
                },
            ],

            'react/jsx-pascal-case': [
                'error',
                {
                    allowAllCaps: true,
                    ignore: [],
                },
            ],

            'react/jsx-uses-react': 'error',
            'react/jsx-no-literals': 'off',
        },
    },
    {
        files: ['**/*.js', '**/*.jsx'],
    },
    {
        ignores: ['./*', '**/*.json'],
    },
];
