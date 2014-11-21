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
    jscs: {
      options: {
        config: '.jscsrc'
      },
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ]
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
  require('time-grunt')(grunt);

  grunt.registerTask('test', [
    'clean',
    'wintersmith',
    'nodeunit',
  ]);

  grunt.registerTask('default', [
    'jshint',
    'jscs',
    'test',
  ]);
};
