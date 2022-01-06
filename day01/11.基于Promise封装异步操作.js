import fs from 'fs';

function getFile(filePath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filePath, 'utf8', (err, dataStr) => {
            if (err) return reject(err);
            resolve(dataStr);
        })
    });
}

const filePathArray = [
    './files/1.txt',
    './files/2.txt',
    './files/3.txt',
]

filePathArray.forEach(item => {
    getFile(item).then((r) => {
        console.log(r);
    })
})