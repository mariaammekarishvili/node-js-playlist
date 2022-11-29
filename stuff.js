const counter = function (arr) {
  return "there are " + arr.length + " elements in this array";
};

const adder = function (a, b) {
  return `the sum of 2 number is ${a + b}`;
};

const pi = 3.142

module.exports = {
    adder: adder,
    counter: counter,
    pi: pi,
};


