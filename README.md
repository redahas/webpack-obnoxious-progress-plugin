# webpack-obnoxious-progress-plugin

An unnecessarily obnoxious progress bar plugin for Webpack

Available on npm [here](https://www.npmjs.com/package/webpack-obnoxious-progress-plugin)

## Setup

### To install:

`yarn add --dev webpack-obnoxious-progress-plugin`

or

`npm i webpack-obnoxious-progress-plugin --save-dev`

### Add to your Webpack config:

#### Production build
```
const ObnoxiousProgressBarPlugin = require('webpack-obnoxious-progress-plugin');

module.exports = {
  plugins: [
    new ObnoxiousProgressBarPlugin(),
  ],
};
```
#### Development
```
const ObnoxiousProgressBarPlugin = require('webpack-obnoxious-progress-plugin');

const DEV_SERVER_PORT = 8000;
const MODE = 'development';

module.exports = {
  mode: MODE,
  devServer: {
    ...
    port: DEV_SERVER_PORT,
  },
  plugins: [
    new ObnoxiousProgressBarPlugin({
      mode: MODE,
      serverPort: DEV_SERVER_PORT,
    }),
  ],
};
```


Now you too can have an obnoxious webpack loader ( ಠ ͜ʖ ಠ)	
