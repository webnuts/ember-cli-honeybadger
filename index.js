/* jshint node: true */
'use strict';

module.exports = {
    name: 'ember-cli-honeybadger',

    included: function(app) {
        this._super.included(app);
        app.import(app.bowerDirectory + '/honeybadger.js/honeybadger.js');
    }
};
