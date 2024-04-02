module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.tsx', '.ts', '.js', '.json', '.jsx'],
        alias: {
          '@api': './src/api',
          '@components': './src/components',
          '@screens': './src/screens',
        },
      },
    ],
  ],
};
