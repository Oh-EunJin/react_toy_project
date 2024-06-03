// 함수선언

function greeting() {
    console.log("안녕하세요");
}

console.log("호출 전");
greeting();
console.log("호출 후");


function getArea() {
    let width = 10;
    let height = 20;
    let area = width * height;

    console.log(area);
}
getArea();


function getArea2(width, height) {
    let area = width * height;

    console.log(area);
}
getArea2(10, 20);
getArea2(30, 20);



let area1 = getArea3(10, 20);
console.log(area1);
let area2 = getArea3(30, 20);
console.log(area2);
// 호이스팅
// -> 끌어올리다 라는 뜻
function getArea3(width, height) {
    let area = width * height;

    function another() {
        console.log("another");
    }
    another();
    return area;
}