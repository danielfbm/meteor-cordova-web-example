Package.describe({
  name: 'danielfbm:app',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Main entry loader for the app',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: ''
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  //Dependencies
  //All
  api.use('iron:router@1.0.7',['client','server']);
  api.use('iron:layout@1.0.7',['client','server']);

  //Client
  // api.use('templating','client');
  // api.use('underscore', 'client');
  // //Mobile
  // api.use('meteoric:ionic@0.1.17','web.cordova');
  // api.use('meteoric:ionic-sass@0.1.9','web.cordova');
  // api.use('meteoric:ionicons-sass@0.1.6','web.cordova');
  //
  // //Web
  // api.use('materialize:materialize','web.browser');


  //Importing the other package
  api.use('danielfbm:home');
});
