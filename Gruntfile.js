module.exports = function(grunt) { 
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    pug: {
      templates: {
        options: {
          i18n: {
            locales: 'locales/*.yaml',
            namespace: '$i18n'
          },
        },
        files: {
          'public/index.html': ['index.pug']
        },
      },
    },
  })
  grunt.loadNpmTasks('grunt-pug-i18n')
}