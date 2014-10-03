'use strict';

var wintersmith = require('wintersmith'),
    _ = require('lodash');

module.exports = function(grunt) {
  grunt.registerMultiTask('wintersmith', 'Run Wintersmith.', function() {
    var done = this.async(),
        options = this.options({
          action: 'build',
          config: 'config.json',
          locals: {},
        }),
        environment = wintersmith(options.config);

    _.merge(environment.config.locals, options.locals);

    switch(options.action) {
      case 'build':
        environment.build(function(error) {
          if (error) {
            grunt.log.error(error);
            done(false);
          } else {
            done();
          }
        });
        break;
      case 'preview':
        environment.preview(function(error) {
          if (error) {
            grunt.log.error(error);
          }
        });
        break;
      default:
        grunt.log.error('Action not supported.');
        done(false);
    }
  });
};
