'use strict';

// const ob = new Object({ name: 'Pavel' });
// const str = String('hello');
// console.log(str);

// const id = Symbol('id');
// ob[id] = 24;

// ob[Symbol('password')] = 1987;
// console.log(ob);

// for (let key of Object.keys(ob)) {
//   console.log(key);
// }

const person = Object.create(
  {},
  {
    name: {
      value: 'Pavel',

      writable: false,
      configurable: false,
      enumerable: true,
    },
    age: {
      get: function () {
        return new Date().getFullYear() - this.birthYear;
      },
    },
    birthYear: {
      value: 1987,
    },
  }
);

console.log(person);

person.greet = () => console.log('object');
Object.defineProperty(person, 'greet', { enumerable: false });
Object.defineProperties(person, {
  friends: {
    value: ['Ivan', 'Mihail'],
    enumerable: true,
  },
  isMan: {
    value: true,
    writable: true,
    enumerable: true,
  },
});

for (let key of Object.keys(person)) {
  console.log(`Key: ${key}`);
}
