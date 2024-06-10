// 5가지 배열 변형 메서드

// 1. filter
// -> 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
let arr1 = [
    { name: "홍길동", hobby: "테니스"},
    { name: "길순이", hobby: "테니스"},
    { name: "고길동", hobby: "런닝"},
];
const tennisPeople = arr1.filter((item) => {
    if(item.hobby === "테니스") 
    return true;
});
console.log(tennisPeople);


// 2. map
// -> 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult = arr2.map((item, idx, arr) => {
    console.log(idx, item);
    return item * 2;
});
console.log(mapResult);

let names = arr1.map((item) => item.name);
console.log(names);


// 3. sort
// -> 배열을 사전순으로 정렬하는 메서드 (원본 배열을 정렬)
let arr3 = ["b", "d", "a", "c"];
arr3.sort();
console.log(arr3);

// 정수 오름차순 정렬
let arr3_1 = [10, 2, 5, 1];
arr3_1.sort((a, b) => {
    if(a > b)            // b가 a앞으로
        return 1;
    else if(a < b)       // a가 b앞으로
        return -1;
    else
        return 0;
});
console.log(arr3_1);

// 정수 내림차순 정렬
let arr3_2 = [10, 2, 5, 1];
arr3_2.sort((a, b) => {
    if(a > b)
        return -1;
    else if(a < b)
        return 1;
    else
        return 0;
});
console.log(arr3_2);


// 4. toSorted
// -> 배열을 사전순으로 정렬한 후 새로운 배열로 반환
let arr4 = ["b", "d", "a", "c"];
const sorted = arr4.toSorted();
console.log(arr4);
console.log(sorted);


// 5. join
// -> 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr5 = ["Hi", "I", "am", "winter"];
const joined = arr5.join('-');
console.log(joined);