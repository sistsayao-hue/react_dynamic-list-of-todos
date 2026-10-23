module.exports = {
env: {
browser: true,
es2024: true,
node: true,
},

parser: '@typescript-eslint/parser',

parserOptions: {
ecmaVersion: 'latest',
sourceType: 'module',
ecmaFeatures: {
jsx: true,
},
},

settings: {
react: {
version: 'detect',
},
'import/resolver': {
typescript: true,
node: true,
},
},

extends: [
'plugin:react/recommended',
'plugin:react-hooks/recommended',
'airbnb-typescript',
'plugin:@typescript-eslint/recommended',
'plugin:import/recommended',
'plugin:import/typescript',
],

rules: {
// Desativa o erro de extensões nos imports
'import/extensions': 'off',

// Evita conflitos comuns com TypeScript
'import/no-unresolved': 'off',
'import/prefer-default-export': 'off',
'import/no-extraneous-dependencies': 'off',

// React
'react/react-in-jsx-scope': 'off',
'react/prop-types': 'off',

// TypeScript
'@typescript-eslint/explicit-function-return-type': 'off',
'@typescript-eslint/no-explicit-any': 'off',
'@typescript-eslint/consistent-type-imports': 'off',

// Formatação e tamanho de linhas
'max-len': 'off',

},
};
