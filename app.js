// console.log(__dirname);
// console.log(__filename);

// let time = 0;
// const timer = setInterval(function () {
//   time += 3;
//   console.log(time + " second passed");
//   if (time > 5) {
//     clearInterval(timer);
//   }
// }, 3000);

// function seyHi() {
//     console.log('hi');
// }

// seyHi();

// function expression
// function callFunction(fun) {
//     fun();
// }
// var sayBye = function() {
//     console.log('bye')
// }

// callFunction(sayBye);

const stuff = require("./stuff");

console.log(stuff.counter(["first", "second", "3th"]));

console.log(stuff.adder(5, 2));

console.log(stuff.adder(stuff.pi, 5))