const fs = require('node:fs/promises');
const path = require('node:path');
const pathToFolder = '03-files-in-folder/secret-folder';
async function showFileInfo() {
    try {
        const files = await fs.readdir(pathToFolder, { withFileTypes: true });
        for (let file of files) {
            if (file.isFile()) {
              const pathToFile = path.join(pathToFolder, file.name);
              const stats = await fs.stat(pathToFile);
              const filesName = path.parse(file.name).name;
              const filesExtens = path.extname(file.name).slice(1);
              const filesSize = stats.size;
              console.log(`${filesName} - ${filesExtens} - ${filesSize} B`);
            } else {
              console.error(`Error: ${file.name} is not a file.`);
            }
        }
    } catch (err) {
        console.error(err);
    }    
}
showFileInfo();