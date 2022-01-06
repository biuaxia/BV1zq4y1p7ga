import thenFs from "then-fs";

thenFs.readFile('./files/1.txt','utf-8').then(result => console.log(result), error => console.error(error));
thenFs.readFile('./files/2.txt','utf-8').then(result => console.log(result), error => console.error(error));
thenFs.readFile('./files/3.txt','utf-8').then(result => console.log(result), error => console.error(error));