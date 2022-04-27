'use strict';

function amountOfPages(summary) {
  let numbers = [];

  for (let i = 1; i <= summary; i++) {
    numbers.push(i);
    const numStr = numbers.join('');
    if (numStr.length === summary) {
      return numbers[numbers.length - 1];
    }
  }
  return numbers;
}

console.log(amountOfPages(5));
console.log(amountOfPages(25));
// console.log(amountOfPages(1095));
// console.log(amountOfPages(185));
