// Zadanie pierwsze 

let first = 'Hello';
let second = 'world!';

function sayHelloTo(person,person2) {
  
    console.log(`${person} ${person2}`);
}
sayHelloTo(first, second);


// Zadanie drugie

const multiply = (x, y = 1) => console.log(x*y);
multiply(8,2);

// Zadanie trzecie

const average = (...args) => args.reduce((x,y) => x + y)/args.length;

  console.log(average(1,2,3));

// Zadanie czwarte

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));

// Zadanie piąte

const arr = [1, 4, 'Iwona', false, 'Nowak'];
const [ , ,firstName, ,lastName] = arr;
console.log(`${firstName} ${lastName}`);