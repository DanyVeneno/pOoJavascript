// WE CAN USE THE OBJECT CONSTRUCTOR TO CREATE GENERIC OBJECTS
let personA = new Object();
personA.name = "Ryan";
personA.surname = "Ray";

// it is the same than create with object literal
// every object using literal notation have an object contructor
const person = {};

console.log(person.constructor == Object); // true

// object contructor can generate object from any javascript expression
let number = new Object(12);
let anotherNumber = new Object(3 * 2);
let string = new Object("test");
let john = new Object({ name: "John", surname: "Smith" });

console.log(number); // not jus a number, but an object with features
console.log(anotherNumber);
console.log(string) // not just a string, but an object with features
console.log(john) // this is the same than an object litral

// all these below are objects
console.log(typeof number);
console.log(typeof anotherNumber);
console.log(typeof string)
console.log(typeof john)

// Object Keys
console.log( Object.keys(john) )

// Object Values
console.log( Object.values(john) )
