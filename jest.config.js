let path = require('path')

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom-sixteen',
  setupFiles: [path.resolve(__dirname, 'public', 'main.js')],
}
