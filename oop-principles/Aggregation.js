// aggregation is a special form of association relationship
// where an object has a major role than other one

// the major role determines the ownership of an object in relation to the other
// the owner object is called aggregate and owned object is called component
// but each object has an independent life

// this is the owner
const company = {
  name: "Fazt Tech",
  employees: [],
};

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

// this are independent objects
const johnSmith = new Person("John", "Smith");
const ryanRay = new Person("Ryan", "Ray");

company.employees.push(johnSmith);
company.employees.push(ryanRay);

// aggregation and association seems similar, but even when sintactically are identical. The assigment or attachment of an object to a property, from a conceptual point of view they represent different situations
// aggregation is a mechanism that allows us to create an object that consist of several objects
