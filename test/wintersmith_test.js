'use strict';

var grunt = require('grunt');

exports.wintersmith = {
  build: function(test) {
    var actual = grunt.file.read('tmp/build/index.html'),
        expected = grunt.file.read('test/expected/index.html');

    test.equal(actual, expected, 'should build the site');

    test.done();
  },
};
