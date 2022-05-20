
// association is the relationship between two or more objects
// each object is independent of each other
// an object can exists without the other

class Person {
  constructor (name, surname) {
    this.name = name;
    this.surname = surname;
    this.parent = null;
  }
}

const johnSmith = new Person('John', 'Smith') //?
const fredSmith = new Person('Fred', 'Smith') //?

// both objects are associated but each lives independently
fredSmith.parent = johnSmith

console.log(fredSmith)