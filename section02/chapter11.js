// 동기 & 비동기
// 동기 : 여러개의 작업을 순서대로 한번에 한개씩 처리하는 방법
// 비동기 : 여러개의 작업을 순서대로 처리하지 않고 동시에 처리하는 방법

// 동기
console.log(1);
console.log(3);

console.log("--------------");

// 비동기
// -> 자바스크립트 엔진에는 쓰레드가 1개밖에 없어서 비동기 작업들은 자바스크립트 엔진이 아닌 Web APIs 에서 실행됨
console.log(1);
setTimeout(() => {
    console.log(2);
}, 3000);
console.log(3);