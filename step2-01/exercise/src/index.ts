// TODO: import the fib(n) function and the constant from './fibonacci.ts'
// import FibConst, {fib} from ...
import FibConst, {fib} from './fibonacci';

// TODO: import Stack from ...
import {Stack} from './stack';

// Do the exercises here, outputting results using console.log()
console.log('hello world');

// ---- Modules ----

// TODO: log the result of fib(FibConst)
console.log(fib(FibConst));

// ---- Types and Interfaces ----

// TODO: define TrafficLight type
// type TrafficLight = ???
type TrafficLight = 'red' | 'yellow' | 'green';

// TODO: define Car interface
// interface Car { ??? }
interface Car {
  wheels: number;
  color: string;
  make: string;
  model: string;
}

// TODO: create Car instance
// const myCar: Car = { ??? }
const myCar: Car = {
  wheels: 4,
  color: 'hot pink',
  make: 'camry',
  model: '1999'
};

console.log(myCar);

// ---- Generics ----

// TODO: Demonstrate the Stack
// const myStack: Stack<number> = ???
const myStack = new Stack<number>();
myStack.push(1);
myStack.push(3);
myStack.push(5);
console.log('Stack from top to bottom: 5, 3, 1');
console.log('Pop the 5 off the top: ' + myStack.pop());
console.log('Pop the 3 off the top: ' + myStack.pop());
console.log('Pop the 1 off the top: ' + myStack.pop());

// ---- Spread and Destructuring ----
const obj1 = {
  first: 'who',
  second: 'what',
  third: 'dunno',
  left: 'why'
};

const obj2 = {
  center: 'because',
  pitcher: 'tomorrow',
  catcher: 'today'
};

// TODO: combine obj1 and obj2 into a single object megaObj using spread syntax
// const megaObj = ???
const megaObj = { ...obj1, ...obj2 };

// TODO: use destructuring syntax to extract { first, second, catcher }
const { first, second, center } = megaObj;
console.log('First: ' + first);
console.log('Second: ' + second);
console.log('Center: ' + center);

// ---- Async / Await ----
function makePromise(): Promise<number> {
  return Promise.resolve(5);
}

// TODO: create a new async function
async function newAsync(): Promise<string> {
  return 'kahoot';
}

async function run() {
  // TODO: call makePromise() using await syntax and log the results
  const waitProm = await makePromise();
  console.log('makePromise() returned: ' + waitProm);

  // TODO: call your new async function
  const waitNew = await newAsync();
  console.log('newAsync() returned: ' + waitNew);
}

run();

// Make this file a module so its code doesn't go in the global scope
export {};
