let { esbuildPlugin } = require('@web/dev-server-esbuild')

module.exports = {
  files: ['src/**.spec.ts'],
  plugins: [esbuildPlugin({ ts: true })],
}
