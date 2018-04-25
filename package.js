Package.describe({
  name: 'diogeneshern:roles',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Administration roles, group & permissions package.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/zenxm/diogeneshern-roles.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  let both = ['client', 'server'];
  api.versionsFrom('1.6');
  api.use('ecmascript');
  api.use(['underscore',
    'accounts-base',
    'tracker',
    'mongo',
    'check'], both);

  api.export('RolesPermission');

  api.addFiles('roles_server.js', 'server');
  api.addFiles('roles_common.js', both);
  // api.addFiles(['client/debug.js',
  //   'client/uiHelpers.js',
  //   'client/subscriptions.js'], 'client');
});

Package.onTest(function(api) {
  let both = ['client', 'server'];
  api.use('ecmascript');
  api.use('tinytest');
  api.use(['diogeneshern:roles',
    'accounts-password',
    'underscore',
    'tinytest'], both);

  // api.addFiles('tests/client.js', 'client');
  // api.addFiles('tests/server.js', 'server');
});
