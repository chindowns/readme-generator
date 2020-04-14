var FileIO = require('./lib/fileIO');
// var fileIO = new FileIO();

function init() {
    console.log(`This utility will walk you through creating a README.md file.
    It only covers the most common items, and tries to guess sensible defaults.
  
    Press ^C at any time to quit.`);

    // Check if Readme exists
    if (FileIO.exists('./README.md')) {
        console.log('README.md file already exists, please delete and run again if you want to generate a new file');
    }



}

init();