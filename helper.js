const CFonts = require('cfonts');
const CONSTANTS = require('./constants');

const logHorizontalLine = (stream) => {
  stream.write(String(`${CONSTANTS.MINUS_SIGN.repeat(stream.columns)}`));
}
const logCarriageReturn = (stream) => {
  stream.write('\n\n');
}

const logMessage = ({
  colors = ['system'],
  align = 'center',
  font = 'block',
  space = true,
  message,
} = {}) => {
  if (!message) return;

  CFonts.say(message, {
    align: 'center',
    colors,
    space,
    align,
    font,
  });
};

const logFramedMessage = ({ stream, message, align = 'left' }) => {
  logCarriageReturn(stream);
  logHorizontalLine(stream);
  logMessage({
    font: 'chrome',
    space: false,
    message,
    align,
  });
  logHorizontalLine(stream);
  logCarriageReturn(stream);
};

module.exports = {
  logMessage,
  logFramedMessage,
};