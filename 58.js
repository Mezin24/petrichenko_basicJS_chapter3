const salaries = {
  mike: 500,
  igor: 2000,
  ann: 5000,
  total: function () {
    let total = 0;
    for (let num in this) {
      if (typeof this[num] === 'number') {
        total += this[num];
      }
    }
    return total;
  },
};

// console.log(salaries.total());
salaries[Symbol.iterator] = function () {
  return {
    current: this.mike,
    last: this.ann,

    next() {
      if (this.current < this.last) {
        this.current += 500;
        return { done: false, value: this.current };
      }

      return { done: true };
    },
  };
};

const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

for (let num of salaries) {
  console.log(num);
}
