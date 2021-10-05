module.exports = function(grunt) { 
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    pug: {
      templates: {
        options: {
          i18n: {
            locales: 'locales/*.yaml',
            namespace: '$i18n',
          },
        },
        files: {
          'public/index.html': ['index.pug']
        },
      },
    },
    copy: {
      main: {
        files: [
          ...['css', 'img'].map(dir => ({
            expand: true, src:[`${dir}/**`], dest: 'public/',
          })),
          {expand: true, src:['index.html'], dest: 'public/'},
        ]
      },
    },
  })
  grunt.loadNpmTasks('grunt-pug-i18n')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.registerTask('default', ['pug', 'copy'])
}