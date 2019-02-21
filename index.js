const webpack = require('webpack');
const helper = require('./helper');
const SiccProgressBar = require('node-progress-loader');

module.exports = function SiccProgressLoader({
  stream = process.stdout,
  mode = 'production',
  serverPort,
} = {}) {
  if (!stream.isTTY) {
    return function () {};
  }

  const progressBar = new SiccProgressBar({ stream });
  const isDev = mode === 'development' && serverPort;
  const finishedMessageConfig = isDev
    ? { message: `Available on port ${serverPort}`, align: 'left' }
    : { message: 'Build finished', align: 'center' };

  helper.logMessage({ message: 'Building...' });

  const handler = (percentage, message) => {
    const newPercent = Math.floor(percentage * 100);

    if (percentage === 1) {
      progressBar.stop();
      helper.logFramedMessage({ stream, ...finishedMessageConfig });
    } else {
      progressBar.draw(newPercent, message);
    }
  };

  return new webpack.ProgressPlugin(handler);
};
