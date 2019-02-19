const webpack = require('webpack');
const helper = require('./helper');
const SiccProgressBar = require('node-progress-loader');
const chalk = require('chalk');

module.exports = function SiccProgressLoader({
  stream = process.stdout,
  startMessage = 'S I C C',
  mode = 'production',
  serverPort,
} = {}) {
  const progressBar = new SiccProgressBar({
    stream,
  });
  const isDev = mode === 'development' && serverPort;
  const finishedMessageConfig = isDev
    ? {
        message: `Available on port:\n\n${serverPort}`,
        font: 'Slant',
        gradient: chalk.blue,
        stream,
      }
    : {
        message: '    Finished...    ',
        font: 'Bloody',
        gradient: chalk.red,
        stream,
      };
  let started = false;
  let currentPercent = 0;

  helper.log3dMessage(startMessage);

  const handler = (percentage, message) => {
    const newPercent = Math.floor(percentage * 100);
    if (!started) {
      progressBar.start();
      started = true;
    }

    if (percentage === 1) {
      progressBar.stop();
      helper.logAsciiMessage(finishedMessageConfig);
    } else if (newPercent > currentPercent) {
      currentPercent = newPercent;
      progressBar.draw(currentPercent, message);
    }
  };

  return new webpack.ProgressPlugin(handler);
};
