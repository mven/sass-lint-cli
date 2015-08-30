#! /usr/bin/env node

var sassLint = require('sass-lint'),
    eslint = require('eslint'),
    CLIEngine = require("eslint").CLIEngine,
    formatter = CLIEngine.getFormatter();

var files = process.argv.slice(2);

files.forEach(function(file) {

  // start lint
  var linted = sassLint.lintFiles(file);

  // output formatted lines to console
  console.log(formatter(linted))

});
