module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }        
      }
    },


    copy: {
      main: {
        
        files: [
          // includes files within path1
          {cwd: 'bower_components/', expand: true, src: ['foundation/js/*'], dest: 'js/vendor/', filter: 'isFile'},
          {cwd: 'bower_components/', expand: true, src: ['jquery/dist/*'], dest: 'js/vendor/'},
          {cwd: 'bower_components/', expand: true, src: ['modernizr/dist/*'], dest: 'js/vendor/', filter: 'isFile'},
          {cwd: 'bower_components/', expand: true, src: ['stickyNavbar/*'], dest: 'js/vendor/', filter: 'isFile'},

        ]
      },
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build','watch']);
}