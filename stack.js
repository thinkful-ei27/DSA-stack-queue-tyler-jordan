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

  pop(){
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
  
}

const peek = (stack) => {
  console.log(stack.top.data);
};

const display = (stack) => {
  let currentItem = stack.top;
  while(currentItem){
    console.log(currentItem.data);
    currentItem = currentItem.next;
  }
};

function palindrome(word){
  let stack = new Stack;
  word = word.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  for(let i = 0; i < word.length; i++){
    stack.push(word.charAt(i));
  }
  let reversedWord = '';
  let currentItem = stack.top;
  while(currentItem){
    reversedWord += stack.pop();
    currentItem = currentItem.next;
  }
  return reversedWord === word;
}

function main(){
  let testStack = new Stack;

  
  display(testStack);
}

main();

module.exports = Stack;