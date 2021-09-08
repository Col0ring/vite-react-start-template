const prettierConfig = require('./prettier.config')
const __DEV__ = process.env.NODE_ENV === 'development'

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  root: true,
  plugins: ['jest'],
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
    // ts 支持
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    // jest 相关
    'plugin:jest/recommended',
    // plugin:prettier/recommended 需要为最后一个扩展
    'plugin:prettier/recommended',
  ],
  // rules 可根据条件自行配置
  rules: {
    // prettier
    'prettier/prettier': ['warn', prettierConfig],
    // js
    'no-shadow': 'error',
    'no-unused-vars': 'warn',
    'no-debugger': __DEV__ ? 'off' : 'warn', // 调试
    'no-console': __DEV__ ? 'off' : 'warn', // 日志打印
    'require-yield': 'warn', // 不允许 generate 函数中没有 yield

    // react
    'react/self-closing-comp': 'error',
  },
  // ts 规则单独覆盖
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      // 只针对 ts 用 typescript-eslint
      parser: '@typescript-eslint/parser',
      // 开启静态检查
      parserOptions: {
        tsconfigRootDir: __dirname,
        ecmaFeatures: {
          jsx: true,
        },
        project: ['./tsconfig.json'],
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        // ts
        '@typescript-eslint/no-var-requires': 'warn',
        '@typescript-eslint/no-shadow': 'error',
        // use @typescript-eslint/no-shadow
        'no-shadow': 'off',
        // use @typescript-eslint/no-unused-vars
        'no-unused-vars': 'off',
      },
    },
  ],
}
