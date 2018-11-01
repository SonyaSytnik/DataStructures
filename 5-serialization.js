'use strict'

const person = {
  name: 'Sonya',
  city: 'Kiev',
  born: 2001,
};

console.log(person);

const s = JSON.stringify(person);
console.log(s);

const obj = JSON.parse(s);
console.log(obj);

const letters = ['A', 'B', 'C', 'D'];

console.log(letters + '');
console.log(JSON.stringify(letters));
console.log(letters.join('-'));
console.log(letters.splice('-'));