// this constructor accetps parameters
function Person(name, surname) {
  this.name = name;
  this.surname = surname;
  this.address = "";
  this.email = "";
}

Person.prototype.displayFullName = function () {
  return this.name + " " + this.surname;
};

const jamesWilson = new Person("James", "Wilson");
const gregoryHouse = new Person("Gregory", "House");

// you wont see the method displayFullName
console.log(jamesWilson)
console.log(gregoryHouse)

// but you can access it
console.log(jamesWilson.displayFullName())
console.log(gregoryHouse.displayFullName())

// this is because the methods does not exists in each object, but it exists in the Constructor or the prototype of the constructor function

console.log(Person.prototype)
