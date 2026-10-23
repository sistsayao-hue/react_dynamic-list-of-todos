
module.exports = {
  env: {
    browser: true,
    es2024: true,
  },

  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb-typescript',
    'plugin:@typescript-eslint/eslint-recommended',
  ],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: ['react', 'react-hooks', '@typescript-eslint'],

  rules: {
    // Desativa a regra que exige parserServices
    '@typescript-eslint/no-implied-eval': 'off',

    // Evita conflitos entre regras antigas e TypeScript
    'no-implied-eval': 'off',

    // Permite imports com ou sem extensão
    'import/extensions': 'off',

    // Mantém as regras de React
    'react/react-in-jsx-scope': 'off',

    // Permite imports de arquivos TypeScript
    'import/no-unresolved': 'off',
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
};
