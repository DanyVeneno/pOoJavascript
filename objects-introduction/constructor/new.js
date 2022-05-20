// without new keyword, execute a constructor is just execute a function, so it does not return an object, but create properties in the global object

function Person() {
  this.name = "";
  this.surname = "";
  this.address = "";
  this.email = "";
  this.displayFullName = function () {
    return this.name + " " + this.surname;
  };
}

// without new this throw an error or access to a global scope
// but this keyword takes the context of the function, and is assigned global variables

// const wrontPerson = Person(); //error

// this function above create this properties inside window object
// window.name = ''
// window.surname = ''
// window.address = ''

// console.log(wrontPerson)

// you can mitigate the access of this using strict mode
// in strict mode 'this' have undefined value, and gives an error
//try to access to a non existed property

function PersonStrict() {
  "use strict";
  this.name = "";
  this.surname = "";
  this.address = "";
  this.email = "";
  this.displayFullName = function () {
    return this.name + " " + this.surname;
  };
}

// const person = PersonStrict(); // error

// but this approach does not work if the function is insid a namespace

const mankind = {
  Person: function (name, lastname) {
    "use strict"
    this.name = name;
    this.lastname = lastname;
  },
};

const ryan = new mankind.Person('ryan', 'ray')
console.log(ryan)

// call it without new
const joe = mankind.Person("Joe", "Smith"); //?

console.log(joe)
console.log(mankind)