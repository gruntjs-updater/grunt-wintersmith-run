'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: true,
      },
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
    },
    clean: {
      tests: [
        'tmp',
      ],
    },
    wintersmith: {
      build: {
        options: {
          config: 'test/fixtures/config.json',
          locals: {
            name: 'Custom Site Name',
          },
        },
      },
    },
    nodeunit: {
      tests: [
        'test/*_test.js',
      ],
    },
    bump: {
      options: {
        commitMessage: 'Bump version to {%= version %}',
      },
    },
  });

  grunt.loadTasks('tasks');

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('test', [
    'clean',
    'wintersmith',
    'nodeunit',
  ]);

  grunt.registerTask('default', [
    'jshint',
    'test',
  ]);
};
