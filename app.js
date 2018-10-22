const fs = require('fs');
const tablaMulti = require('./library/tabla');
const argv = require('yargs').argv;

//let base = '6';

let argsProcess = process.argv;

console.log(argsProcess);
console.log(argv);

//let paramX = args[2];
//let base = paramX.split('=')[1];
//base = base[1];

// tablaMulti.setMultiplica(base)
//     .then(res => console.log(`Archivo creado ${res}`))
//     .catch(error => console.log(error));