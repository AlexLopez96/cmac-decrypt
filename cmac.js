// const CryptoJS = require('crypto-js');
const aesCmac = require('node-aes-cmac').aesCmac;

// Example with buffers.
const bufferKey = Buffer.from('00000000000000000000000000000000', 'hex');
const bufferMessage = Buffer.from('3CC30001008004DE5F1EACC0403D0000','hex'); //test
const bufferMessage3 = Buffer.from('3CC3000100800428892AAA6180000006','hex'); //el bo
const bufferMessage4 = Buffer.from('3CC3000100800428892AAA6180600000','hex'); //el bo amb els zeros canviats
const options = {returnAsBuffer: true};
cmac = aesCmac(bufferKey, bufferMessage, options);
cmac3 = aesCmac(bufferKey, bufferMessage3, options);
cmac4 = aesCmac(bufferKey, bufferMessage4, options);

console.log("cmac "+ Buffer.from(cmac, 'base64').toString('hex'));
console.log("cmac3 "+ Buffer.from(cmac3, 'base64').toString('hex'));
console.log("cmac4 (zero) "+ Buffer.from(cmac4, 'base64').toString('hex'));
