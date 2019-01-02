const fs = require('fs');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;

let title = yargs.argv.title;
let body = yargs.argv.body;
let command = yargs.argv._[0];

console.log(title, body, command);