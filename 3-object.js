'use strict'

const person = {
  name: 'Sonya',
  city: 'Kiev',
  born: 2001,
};

if ('name' in person) console.log('Person name is ' + person.name);

for (const key in person) {
  const value = person[key];
  console.dir({ key, value });
}

const name = 'Sonya Sytnik';
const city = 'Kiev';
const born = 2001;

const person1 = {
  name: name,
  city: city,
  born: born,
};

console.dir({ person1 });

const person2 = {
  name, city, born,
};

console.dir({ person2 });

const fieldName = 'city';
const fieldValue = 'Kiev';

const person3 = {
  name: 'Sonya Sytnik',
  [fieldName]: fieldValue,
};

console.dir({ person3 });

const person4 = {
  name: 'Sonya Sytnik',
  ['city' + 'Born']: fieldValue,
};

console.dir({ person4 });

function fn(field1) {
  return field1 + 'Born';
}

const person5 = {
  name: 'Sonya Sytnik',
  [fn('city')]: fieldValue,
};

console.dir({ person5 });