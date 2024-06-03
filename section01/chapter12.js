// 1. 함수 표현식

function funcA() {
    console.log("funcA");
}

let varA = funcA;
varA();

// 익명함수
let varB = function () {
    console.log("funcB");
}
varB();


// 2. 화살표 함수
let varC = () => {
    return 1;
}
console.log(varC());

let varC2 = () => 1
console.log(varC2());

let varC3 = (value) => value + 1
console.log(varC3(10));

let varC4 = (value) => { 
    console.log(value);
    return value + 1;
}
console.log(varC4(5));