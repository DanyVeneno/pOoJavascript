// class expression can be named or unnamed

// unnamed
const Person = class {
  constructor(name, lastname) {
    this.name = name
    this.lastname = lastname
  }
}

const person = new Person("joe", "doe")

// named
const User2 = class User {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
}

console.log(User2.name)

const newUser = new User2("John", "Connor")
console.log(newUser)