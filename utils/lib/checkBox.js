const stream = process.stderr;
const readline = require('readline');

module.exports = function (text, isComplete) {
    if (isComplete) {
        readline.cursorTo(stream, 0);
        readline.clearLine(stream, 0);
        stream.write(`✔ ${text}\n`);
    } else {
        stream.write(`◻ ${text}`);
    }
};