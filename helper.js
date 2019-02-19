const figlet = require('figlet');
const CFonts = require('cfonts');

const log3dMessage = (message, options = {}) => {
  CFonts.say(message, {
    font: '3d',
    align: 'left',
    colors: ['yellow', 'red'],
    space: true,
  });
  process.stdout.write('\n\n');
}

const logAsciiMessage = ({
  font = 'bigchief',
  message,
  gradient,
} = {}) => {
  if (message) {
    figlet.text(message, { font }, (err, data) => {
      if (err) {
        process.stdout.write('Something went wrong...');
        console.dir(err);
        return;
      }
      const asciiMessage = gradient ? gradient(data) : data;
      
      process.stdout.write('\n\n');
      process.stdout.write(asciiMessage);
      process.stdout.write('\n\n');
    });
  }
};

module.exports = {
  log3dMessage,
  logAsciiMessage,
};