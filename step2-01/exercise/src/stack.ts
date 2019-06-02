// TODO: create a Stack<T> generic class here:

// export class Stack<T> {
//   push(...) { ... }
//   pop(...) { ... }
// }

export class Stack<T> {
  private _stack: T[];

  constructor() {
    this._stack = [];
  }

  push(element: T): void {
    this._stack.push(element);
  }

  pop(): T {
    return this._stack.pop();
  }
}
