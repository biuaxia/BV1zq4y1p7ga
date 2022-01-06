import thenFs from "then-fs";

const promiseArray = [
    thenFs.readFile('./files/1.txt', 'utf-8'),
    thenFs.readFile('./files/2.txt', 'utf-8'),
    thenFs.readFile('./files/3.txt', 'utf-8'),
]

// all 是等待，会等待所有异步操作完成后去执行then方法，如果出错了就无法继续向下执行
Promise.all(promiseArray).then((r) => {
    console.log(r);
}).catch((err) => {
    console.error(err);
})