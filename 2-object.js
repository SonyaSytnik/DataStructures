'use strict'

const person1 = {

  name: 'Sonya',
  city: 'Zhytomyr',
  born: 2001,
};

console.log('Person name is ' + person1.name);
console.log('Person name is ' + person1['name']);

delete person1.name;
console.dir({ person1 });

delete person1.city;
console.dir({ person1 });


const person2 = {
  name: 'Sonya Sytnik',

  get city() {
    return 'Zhytomyr';
  },

  set city(value) {
    console.log('Sonya remains in Zhytomyr!');
  },

};

//console.log(person2.city);
person2.city = 'Kiev';

console.dir({ person2 });
