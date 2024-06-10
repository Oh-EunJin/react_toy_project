// 5가지 요소 순회 및 탐색 메서드

// 1. forEach
// -> 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];
arr1.forEach((item, idx, arr) => {
    console.log(idx, item * 2);
});

let doubledArr = [];
arr1.forEach((item) => {
    doubledArr.push(item * 2);
});
console.log(doubledArr);


// 2. includes
// -> 배열의 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
console.log(isInclude);


// 3. indexOf
// -> 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3, 2];
let index = arr3.indexOf(2);
console.log(index);

let objectArr = [
    { name: "홍길동" },
    { name: "길순이" },
];
console.log(
    objectArr.indexOf({name: "길순이"})
);


// 4. findIndex
// -> 모든 요소를 순회하면서, 콜백함수를 만족함
// -> 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3, 1, 2, 0, 2];
arr4.findIndex((item, idx) => {
    if(item == 2) {
        console.log(idx);
    }
});
const findedIndex = arr4.findIndex((item) => {
    if(item % 2 !== 0) {
        return true;
    }
});
console.log(findedIndex);

const findedIndex2 = arr4.findIndex(
    (item) => item % 2 !== 0
);
console.log(findedIndex2);

let objectArr2 = [
    { name: "홍길동" },
    { name: "길순이" },
];
console.log(
    objectArr2.findIndex(
        (item) => item.name === "길순이"
    )
);


// 5. find
// -> 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾아, 그 요소를 그대로 반환
let arr5 = [
    { name: "홍길동" },
    { name: "길순이" },
];
const finded = arr5.find((item) => item.name === "길순이");
console.log(finded);