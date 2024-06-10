// Promise : 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
// -> 비동기 작업을 감싸는 객체
// -> 대기(Pending) : 아직 작업이 완료되지 않은 상태
// -> 성공(FulFilled) : 비동기 작업이 성공적으로 마무리 된 상태
// -> 실패(Rejected) : 비동기 작업이 실패한 상태

function add10(num) {
    const promise = new Promise((resolve, reject) => {
        // 비동기 작업 실행하는 함수
        // executer
    
        setTimeout(() => {
    
            if(typeof num === 'number') {
                resolve(num + 10);
            } else {
                reject("No Number");
            }
        }, 2000);
    });

    return promise;
}

add10(0)
    .then((result) => {
        console.log(result);
        return add10(result);
    })
    .then((result) => {
        console.log(result);
        return add10(result);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

// then 메서드
// -> 그 후에
// -> promise가 성공된 경우에만 실행됨
// promise
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// catch 메서드
// -> promise 가 실패한 경우 실행됨
// promise.catch((error) => {
//     console.log(error);
// });