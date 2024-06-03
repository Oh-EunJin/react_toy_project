// 1. 상수 객체
const animal = {
    type : "고양이",
    name : "나비",
    color : "black"
}

animal.age = 2;
animal.name = "까망이";
delete animal.color;

console.log(animal);


// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함
const person = {
    name : "홍길동",
    sayHi: function () {
        console.log("안녕");
    },
    sayBye: () => {
        console.log("바이");
    },
    sayHi2() {
        console.log("안녕!!!!!!!!");
    }
};

person.sayHi();
person.sayBye();
person.sayHi2();