/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
module.exports = function (defaults) {
    var app = new EmberApp(defaults, {
        storeConfigInMeta: false,
        fingerprint: {
            enabled: false
        },
        lessOptions: {
            paths: [
                'bower_components/bootstrap/less'
            ]
        }
    });
    app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');
    app.import('bower_components/bootstrap/dist/css/bootstrap.css');
    app.import('bower_components/bootstrap/less/variables.less');
    // Use `app.import` to add additional libraries to the generated
    // output files.
    //
    // If you need to use different assets in different
    // environments, specify an object as the first parameter. That
    // object's keys should be the environment name and the values
    // should be the asset to use in that environment.
    //
    // If the library that you are including contains AMD or ES6
    // modules that you would like to import into your application
    // please specify an object with the list of modules as keys
    // along with the exports of each module as its value.
    // incorporate project-Bootstrap fonts, and put them in the CSS reference location
    var appTree;
    var Funnel = require('broccoli-funnel');
    var mergeTrees = require('broccoli-merge-trees');
    var bootstrapFonts = new Funnel('bower_components/bootstrap/dist/fonts/', {
        srcDir: '/',
        destDir: '/fonts'
    });
    /// If we're in test or local, include test stubs (mirage and jsxAd)
    appTree = app.toTree();
    return mergeTrees([appTree, bootstrapFonts]);
};
