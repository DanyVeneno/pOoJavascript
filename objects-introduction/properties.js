// Properties names doesn't have the same restrictions than variable names

// the double quotes are optional in keys
const john = {
  name: "John",
  surname: "Smith",
  age: 30
};

// you can use any name, but if the name of the property is not a valid variable name, you have to use double quotes
const user = {
  'fist-name': "Ryan",
  'last name': "Ray",
  "@nickname": 'ryan123',
  "&alias": "ryan123"
}

// you can assign any value to an object property, even another object
// this is called a nested object
let ryan = {
  "first-name": "Ryan", // string
  age: 30, // number
  hobbies: ['read', 'run', 'programming'], // array
  married: false,
  address: {
    // a nested object
    street: "13 duncannon Street",
    city: "London",
    country: "United Kingdom",
  },
};

// to access to values stored in properties you can use
// dot notation
let name = john.name;

// or string in square brackets
// this is required is the name is not a valid variable name
let firstname = ryan["first-name"];

// if we access to a non-existin property, we get undefined
let age = joe.age; // undefined

// Create a new Property

// if we assign a value to a not yet defined property, we actually create this property
joe.nickname = 'ryan123';

// Dynamic Nature of Javascript
// we can start with a basic definition and gradually add more properties
let newUser = {};

newUser.name = "Greg";
newUser.surname = "House";
newUser.address = {
  street: "123 dunncannon street",
  city: "London",
  country: "United Kingdom",
};
newUser.age = 28;

// besides being able to create properties dinamically, we can destroy it
delete newUser.age;

// if we access again to the property it will be 'undefined'
console.log(newUser.age)