// const {add, sub} = require("./math.js");
// import multi from "./math.js";
import multi, { add, sub } from "./math.js";
import randomColor from "randomcolor";

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(multi(3, 2));

const color = randomColor();
console.log(color);