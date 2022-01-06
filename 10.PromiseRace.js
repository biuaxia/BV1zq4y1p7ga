import thenFs from "then-fs";

const promiseArray = [
    thenFs.readFile('./files/1.txt', 'utf-8'),
    thenFs.readFile('./files/2.txt', 'utf-8'),
    thenFs.readFile('./files/3.txt', 'utf-8'),
]

// race 是赛跑，谁最先读取就执行谁（执行一次）
Promise.race(promiseArray).then((r) => {
    console.log(r);
}).catch((err) => {
    console.error(err);
})