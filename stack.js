'use strict';
const _Node = require('./node');

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }

}

const peek = (stack) => {
  return stack.top.data;
};

const display = (stack) => {
  let currentItem = stack.top;
  while (currentItem) {
    console.log(currentItem.data);
    currentItem = currentItem.next;
  }
};

function palindrome(word) {
  let stack = new Stack;
  word = word.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  for (let i = 0; i < word.length; i++) {
    stack.push(word.charAt(i));
  }
  let reversedWord = '';
  let currentItem = stack.top;
  while (currentItem) {
    reversedWord += stack.pop();
    currentItem = currentItem.next;
  }
  return reversedWord === word;
}

function matchingParens(exp) {
  let stack = new Stack;
  let openAndCloseCounter = 0;
  for (let i = 0; i < exp.length; i++) {
    let char = exp.charAt(i);
    stack.push({ char: char, index: i });
    if (char === '(') {
      openAndCloseCounter++;
    }
    if (char === ')') {
      openAndCloseCounter--;
    }
    if (openAndCloseCounter === -1) {
      let earlyClose = stack.pop();
      return earlyClose.index;
    }
  }
  if (openAndCloseCounter === 0) {
    return 'Expression is Great!';
  }
  if (openAndCloseCounter > 0) {
    let currentTop = {};
    while (currentTop) {
      currentTop = stack.pop();
      if (currentTop.char === ')') {
        openAndCloseCounter++;
      }
      if (currentTop.char === '(') {
        openAndCloseCounter--;
      }
      if (openAndCloseCounter === 0) {
        return currentTop.index;
      }
    }
    return currentTop.index;
  }
}

function main() {
  let testStack = new Stack;


  display(testStack);
}
console.log(matchingParens('()()())()'));
// main();

module.exports = Stack;