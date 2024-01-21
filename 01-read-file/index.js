const path = require('node:path');
const fs = require("fs");
const filePath = path.resolve(__dirname, 'text.txt');
const stream = fs.createReadStream(filePath);
stream.setEncoding('utf8');
stream.on('data', (data) => {
  process.stdout.write(data);  
});
