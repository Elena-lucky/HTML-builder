const fs = require('node:fs');
const readline = require('node:readline');
const pathToFile = '02-write-file/text.txt';
const writeStream = fs.createWriteStream(pathToFile, { flags: 'a' });
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log('Hello, Rolling Scope! Write your text and press "Enter"\n Write "exit" or press "ctrl + c" to stop:');
rl.on('line', (input) => {
  if (input.toLowerCase() === 'exit') {
    console.log('Bye! Good luck!');
    writeStream.end();
    rl.close();
    } else {
    writeStream.write(`${input}\n`);
  }
});
rl.on('close', () => {
  process.exit();
});