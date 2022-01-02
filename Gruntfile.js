let { readFileSync } = require('fs')
let { load } = require("js-yaml")
let poststylus = () =>
  require('poststylus')(['autoprefixer', 'postcss-font-magician', 'cssnano'])
let webpackConfig = require('./webpack.config')

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    pug: {
      templates: {
        options: {
          data: {
            require,
            $default_i18n: load(readFileSync('./locales/_default.yaml', 'utf8'))
          },
          i18n: {
            locales: 'locales/!(_default).yaml',
            namespace: '$i18n',
          },
        },
        files: {
          'public/index.html': ['index.pug'],
        },
      },
    },
    stylus: {
      compile: {
        options: { use: [poststylus] },
        files: { 'public/style.css': 'style.styl' },
      },
    },
    webpack: {
      dev: webpackConfig,
    },
    copy: {
      main: {
        files: [
          { expand: true, src: ['img/**'], dest: 'public/' },
          { expand: true, src: ['index.html'], dest: 'public/' },
          { expand: true, src: ['swiper.js'], dest: 'public/' },
        ],
      },
    },
  })
  grunt.loadNpmTasks('grunt-pug-i18n')
  grunt.loadNpmTasks('grunt-contrib-stylus')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-webpack')
  grunt.registerTask('default', ['webpack', 'stylus',  'pug', 'copy'])
}