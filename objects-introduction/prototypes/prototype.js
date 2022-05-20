// we can change structure after the creation of an object even using a constructor
function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}

const john = new Person("John", "Smith");
const mario = new Person("Mario", "Rossi");

john.greets = function () {
  return `Hello ${this.name} ${this.surname}!`;
};

// But, to change the structure of all Objects created by a construtor we can use its prototype

Person.prototype.greets = function () {
  return `Hello I'am ${this.name} ${this.surname}!`;
};

mario.greets()
// the method is not added to each instance. So The prototype is a reference to another Object, if a object dont have a method, it will find in the construtor and if not, it will find in the basic Object methods