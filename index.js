
const FileIO = require("./fileIO.js");

const fileIO = new FileIO();

let jsonInfo = fileIO.read("package.json")

console.log(jsonInfo);