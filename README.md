# grunt-wintersmith-run [![Build Status](https://travis-ci.org/xavierdutreilh/grunt-wintersmith-run.svg)](https://travis-ci.org/xavierdutreilh/grunt-wintersmith-run)

> A Grunt plugin to run Wintersmith actions

## Getting Started

This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-wintersmith-run --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-wintersmith-run');
```

## The "wintersmith" task

### Overview

In your project's Gruntfile, add a section named `wintersmith` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  wintersmith: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.action

Type: `String`
Default value: `build`

Specifies the action to run with Wintersmith.

#### options.background

Type: `Boolean`
Default value: `false`

Specifies the mode to run the preview server.

#### options.config

Type: `String`
Default value: `config.json`

Specifies the path to the configuration file.

#### options.locals

Type: `Object`
Default value: `{}`

Specifies the custom `locals` to pass to Wintersmith.

### Usage Examples

#### Build a site

```js
grunt.initConfig({
  wintersmith: {
    build: {
    },
  },
});
```

#### Run local webserver

```js
grunt.initConfig({
  wintersmith: {
    options: {
      action: 'preview',
    },
  },
});
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

* 2015-02-26 v0.1.4 Package cleanup
* 2014-12-10 v0.1.3 Proper project description
* 2014-11-14 v0.1.2 Background mode support
* 2014-10-03 v0.1.1 Better error management
* 2014-10-03 v0.1.0 Initial release
