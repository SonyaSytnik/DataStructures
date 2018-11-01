'use strict'

const person1 = {};
person1.name = 'Sonya';
person1.city = 'Zhytomyr';
person1.born = 2001;

const person2 = new Object();
person2.name = 'Sonya';
person2.city = 'Zhytomyr';
person2.born = 2001;

const person3 = {

  name: 'Sonya',
  city: 'Zhytomyr',
  born: 2001,

};

console.dir({ person1, person2, person3 });
