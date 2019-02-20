'use strict';

// Zadanie pierwsze 

var first = 'Hello';
var second = 'world!';

function sayHelloTo(person, person2) {

  console.log(person + ' ' + person2);
}
sayHelloTo(first, second);

// Zadanie drugie

var multiply = function multiply(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return console.log(x * y);
};
multiply(8, 2);

// Zadanie trzecie

var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (x, y) {
    return x + y;
  }) / args.length;
};

console.log(average(1, 2, 3));

// Zadanie czwarte

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average.apply(undefined, grades));

// Zadanie piąte

var arr = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = arr[2],
    lastName = arr[4];

console.log(firstName + ' ' + lastName);
