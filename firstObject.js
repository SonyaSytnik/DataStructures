 'use strict'

const person = {

  name: ['Sonya', 'Sytnik'],
  age: 17,
  interests: ['music', 'physics'],
  biography()  {    
  console.log( person.name[0] + ' ' + person.name[1] + ' ' + person.age);
  },
  
};

person.biography();
console.dir(person);
