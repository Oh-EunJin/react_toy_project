// 단락 평가
// -> 뒤에 연산까지 가지 않고 앞 연산만으로 결과 값을 알 수 있는 것
function returnFalse() {
    console.log("False 함수");
    return false;
}

function returnTrue() {
    console.log("True 함수");
    return true;
}

console.log("-----------------");
console.log(returnFalse() && returnTrue());
console.log("-----------------");
console.log(returnTrue() && returnFalse());
console.log("-----------------");
console.log(returnTrue() || returnFalse());
console.log("-----------------");
console.log(returnFalse() || returnTrue());
console.log("-----------------");


// 단락 평가 활용 사례
function printName(person) {
    const name = person && person.name;
    console.log(name || "person의 값이 없음");
}

printName();
printName({name: "홍길동"});