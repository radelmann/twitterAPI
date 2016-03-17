module.exports = function(grunt) {
  //grunt wrapper function 
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    ngAnnotate: {
      options: {
        singleQuotes: true
      },
      app: {
        files: {
          './client/dist/safe/app/services/services.js': ['./client/app/services/services.js'],
          './client/dist/safe/app/tweets/tweets.js': ['./client/app/tweets/tweets.js'],
          './client/dist/safe/app.js': ['./client/app/app.js']
        }
      }
    },
    concat: {
      js: { //target
        src: ['./client/dist/safe/app.js', './client/dist/safe/app/*/*.js'],
        dest: './client/dist/app/app.js'
      }
    },
    uglify: {
      js: { //target
        src: ['./client/dist/app/app.js'],
        dest: './client/dist/app/app.js'
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          './client/dist/css/styles.css': ['./client/css/styles.css']
        }
      }
    }
  });

  //load grunt tasks
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-ng-annotate');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  //register grunt default task
  grunt.registerTask('default', ['ngAnnotate', 'concat', 'uglify', 'cssmin']);
}