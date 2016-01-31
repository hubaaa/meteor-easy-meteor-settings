Package.describe({
  name: 'practicalmeteor:easy-meteor-settings',
  version: '0.1.2',
  // Brief, one-line summary of the package.
  summary: "Easily read deep values from Meteor.settings using 'a.b.c'",
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/practicalmeteor/meteor-easy-meteor-settings',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use([
    'meteor',
    'underscore',
    'coffeescript',
    'practicalmeteor:loglevel@1.2.0_2',
    'practicalmeteor:chai@2.1.0_1',
    'practicalmeteor:underscore-deep@0.9.2'
  ]);

  api.addFiles('namespace.coffee');
  api.addFiles('EasyMeteorSettings.coffee');
});

// Package.onTest has the same API as Package.onUse
Package.onTest(function(api) {
  // Add the package to test
  api.use('practicalmeteor:easy-meteor-settings@0.1.2');

  // Add packages you want to use in your test
  api.use(['underscore', 'coffeescript']);

  // Add the mocha unit testing framework
  api.use('practicalmeteor:mocha@2.1.0_7');

  // To add the tinytest unit testing framework, use the following instead
  // api.use('tinytest');

  // Add the popular chai lib for advanced asserts
  api.use('practicalmeteor:chai@2.1.0_1');

  // Add the popular sinon lib for advanced test spies and stubs
  api.use('practicalmeteor:sinon@1.14.1_2');

  // Add the tests
  api.addFiles('EasyMeteorSettingsTest.coffee');
});
