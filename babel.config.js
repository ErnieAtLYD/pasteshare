module.exports = {
    presets: ['next/babel'],
    plugins: [
      ['@babel/plugin-syntax-import-attributes', { deprecatedAssertSyntax: true }]
    ]
  };