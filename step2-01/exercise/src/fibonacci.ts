// TODO: create a named export of a function called fib(n)
// export function fib(n: number) ...
export function fib(n: number) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

// TODO: create a default export of a constant of a number FibConst
// export default ...
const FibConst: number = 3
export default FibConst;
