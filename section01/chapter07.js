// 1. 대입 연산자
let var1 = 1;
console.log(var1);

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 1;
let num3 = 3 * 2;
let num4 = 6 / 3;
let num5 = 5 % 2;

let num6 = 1 + 2 * 10;
console.log(num6);
let num7 = (1 + 2) * 10;
console.log(num7);

// 3. 복합 대입 연산자 (산술 + 대입)
let num8 = 10;
num8 += 20;
num8 -= 10;
num8 *= 20;
num8 /= 10;
num8 %= 10;
console.log(num8);

// 4. 증감 연산자
let num9 = 10;
console.log(++num9);        // 전위 연산
console.log(num9--);        // 후위 연산
console.log(num9);

// 5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;
console.log(or, and, not);

// 6. 비교 연산자
let comp1 = 1 === 2;
let comp2 = 1 !== 2;
let comp3 = 1 == '1';
let comp4 = 1 === '1';
console.log(comp1, comp2, comp3, comp4);

let comp5 = 2 > 1;
let comp6 = 2 < 1;
console.log(comp5, comp6);

let comp7 = 2 <= 2;
let comp8 = 2 >= 2;
console.log(comp7, comp8);