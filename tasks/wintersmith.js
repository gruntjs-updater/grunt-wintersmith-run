'use strict';

var _ = require('lodash');
var wintersmith = require('wintersmith');

module.exports = function(grunt) {
  grunt.registerMultiTask('wintersmith', 'Run Wintersmith.', function() {
    var done = this.async();

    var options = this.options({
      action: 'build',
      background: false,
      config: 'config.json',
      locals: {},
    });

    var environment = wintersmith(options.config);

    _.merge(environment.config.locals, options.locals);

    switch (options.action) {
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
            done(false);
          } else if (options.background) {
            done();
          }
        });
        break;
      default:
        grunt.log.error('Action not supported.');
        done(false);
    }
  });
};
