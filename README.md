# webpack-obnoxious-progress-plugin

An unnecessarily obnoxious progress bar plugin for Webpack

Available on npm [here](https://www.npmjs.com/package/webpack-obnoxious-progress-plugin)

## Setup

To install:

`yarn add --dev webpack-obnoxious-progress-plugin`

or

`npm i webpack-obnoxious-progress-plugin --save-dev`

Then add to your Webpack config:

```
const ObnoxiousProgressBarPlugin = require('webpack-obnoxious-progress-plugin');

module.exports = {
  entry: ...,
  output: { ... },
  plugins: [
    new ObnoxiousProgressBarPlugin(),
  ],
};
```

Now you too can have an obnoxious webpack loader ( ಠ ͜ʖ ಠ)	
