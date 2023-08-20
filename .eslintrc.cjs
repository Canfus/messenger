module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['airbnb', 'airbnb-typescript', 'airbnb/hooks', 'plugin:storybook/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': 'off',
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        controlComponents: ['Checkbox'],
        assert: 'either',
      },
    ],
    '@typescript-eslint/no-unused-vars': 'warn',
  },
}
