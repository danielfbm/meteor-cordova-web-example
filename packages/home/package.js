Package.describe({
  name: 'danielfbm:home',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'This is a test of for generating one app with two different interfaces for web and mobile',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  //Basic for creating templates
  api.use('templating');

  //General dependencies
  api.use([
    'iron:router',
    'iron:layout'
  ],['client','server']);

  //Cordova dependencies
  api.use([
    'meteoric:ionic',
    'meteoric:ionic-sass',
    'meteoric:ionicons-sass'
  ],'web.cordova');


  //Web dependencies
  api.use([
    'materialize:materialize',
  ],'web.browser');


  //Web only files
  api.addFiles([
    'web/routes/home.js',
    'web/style.css',
    'web/home.html',
    'web/layouts/standardLayout.html'
  ],'web.browser');


  //Cordova only files
  api.addFiles([
    'cordova/home.html',
    'cordova/styles.scss',
    'cordova/routes/home.js',
    'cordova/layouts/tabsLayout.html',
    'cordova/layouts/tabsLayout.js',
  ],'web.cordova');

});
