import { Stack } from './stack';

// Jest is used for unit testing - its API:
// 1) describe('thing to be tested', function to run tests)
// 2) it('desc of behavior to test/name of test', function to run tests)
// 3) expect(actual value) returns obj with various "matcher" methods to test
// against expected value/condition, e.g. expect(true).toBe(true);
// These 3 fn are globally exported, so no need to import into each file

describe('Stack', () => {
  it('should push item to the top of the stack', () => {
    // 1. Instantiate a new Stack
    const stack = new Stack<number>();
    // 2. Use stack push calls to add some items to the stack
    // 3. Write assertions via the expect() API
    stack.push(1);
    expect(stack.peek()).toBe(1);
    expect(stack.count).toBe(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    expect(stack.count).toBe(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
    expect(stack.count).toBe(3);
  });

  it('should pop the item from the top of stack', () => {
    // 1. Instantiate a new Stack
    const stack = new Stack<number>();

    // 2. Use stack push calls to add some items to the stack
    stack.push(1);
    stack.push(2);
    stack.push(3);

    // 3. pop a few items off the stack
    // 4. write assertions via the expect() API
    expect(stack.pop()).toBe(3);
    expect(stack.count).toBe(2);
    expect(stack.pop()).toBe(2);
    expect(stack.count).toBe(1);
    expect(stack.pop()).toBe(1);
    expect(stack.count).toBe(0);
  });
});
