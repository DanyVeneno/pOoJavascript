// Object Literal are not reusable, so if we need multiple Object we have to write them multiple times
const john = {
  name: "John",
  surname: "Smith",
  address: {
    street: "13 Duncannon Street",
    city: "London",
    country: "United Kingdom",
  },
  displayFullName: function () {
    return this.name + " " + this.surname;
  },
};

const mario = {
  name: "Mario",
  surname: "Rossi",
  address: {
    street: "Piazza Colonna 370",
    city: "Roma",
    country: "Italy",
  },
  displayFullName: function () {
    return this.name + " " + this.surname;
  },
};

const maria = {
  name: "maria",
  surname: "Perez",
  address: {
    street: "Av Chapultepec",
    city: "Mexio",
    country: "Mexico",
  },
  displayFullName: function () {
    return this.name + " " + this.surname;
  },
};

// So instead of write multiple Objects we can use a Object Constructor
// a constructor basically is a function that returns objects
function Person() {
  this.name = "";
  this.surname = "";
  this.address = "";
  this.email = "";
  this.displayFullName = function () {
    return this.name + " " + this.surname;
  };
}

// In order to create new objects we have to use the `new` keyword
let ryanRay = new Person();
ryanRay.name = "Ryan";
ryanRay.surname = "Ray";
ryanRay.displayFullName();

let johnCarter = new Person();
johnCarter.name = "John";
johnCarter.surname = "Carter";
johnCarter.displayFullName();
