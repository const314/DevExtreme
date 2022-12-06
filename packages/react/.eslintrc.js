module.exports = {
  parserOptions: {
    createDefaultProgram: true,
    project: './tsconfig.package.json',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    'react-hooks',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      env: {
        jest: true,
      },
    },
  ],
};
