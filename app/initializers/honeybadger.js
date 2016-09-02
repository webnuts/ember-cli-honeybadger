import Ember from 'ember';
import ENV from '../config/environment';

export function initialize() {
  if (Honeybadger) {
    var apiKey = Ember.get(ENV, 'honeybadger.apiKey');
    var environment = Ember.get(ENV, 'honeybadger.environment');
    var debug = Ember.get(ENV, 'honeybadger.debug') || false;
    var disabled = Ember.get(ENV, 'honeybadger.disabled') || false;

    Honeybadger.configure({
      api_key: apiKey,
      environment: environment,
      debug: debug,
      onerror: true,
      disabled: disabled
    });
  }
}

export default {
  name: 'honeybadger',
  initialize: initialize
};
