# ember-cli-honeybadger

Plugin for ember-cli that enables honeybadger error tracking.

## Installation

To install simply run:

```
ember install ember-cli-honeybadger
```

## Usage

You only need to configure the plugin.

## Configuration

You need to define your API key and environment in your config/environment.js file:

```
ENV.honeybadger = {
  apiKey: 'YOUR_HONEYBADGER_API_KEY_HERE',
  environment: 'development',
  debug: false
};
```

You can set debug to true, if you want honeybadger debug information in your browser console window.
