// a constructor returns a new instance, even if there is no a return statement
// but is possible to override the default construtor behavior
class MyClassTwo {
  constructor(value1, value2) {
    return {
      property1: value1,
      property2: value2,
      location: "London",
    };
  }
}

let myClassTwo = new MyClassTwo("foo", "bar");
console.log(myClassTwo)

// all method of a class are added to the prototype, but not to each instance

class User {
  constructor(name) {
    this.name = name
  }
  print() {
    return "I am " + this.name
  }
}

// none of these have the print method
const user1 = new User("Ryan")
const user2 = new User("Joe")

console.log(user1.print())
console.log(user2.print())