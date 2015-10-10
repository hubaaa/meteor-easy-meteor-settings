Package.describe({
  name: 'hubaaa:easy-meteor-settings',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  summary: "Easily read deep values from Meteor.settings using 'a.b.c'",
  // URL to the Git repository containing the source code for this package.
  git: '',
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
    'practicalmeteor:underscore-deep'
  ]);

  api.addFiles('namespace.coffee');
  api.addFiles('EasyMeteorSettings.coffee');
});

Package.onTest(function(api) {
  api.use([
    'underscore',
    'coffeescript',
    'practicalmeteor:mocha@2.1.0_3'
  ]);

  api.use('hubaaa:easy-meteor-settings@0.1.0');

  api.addFiles('EasyMeteorSettingsTest.coffee');
});
