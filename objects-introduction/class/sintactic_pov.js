// from a sintactic point of view, a class is a collection of methods grouped by a name
// one of the method of a class is the constructor
// which initialize properties

class myClass {
  // you cannot have more than one construtor
  constructor(value1, value2) {
    this.property1 = value1;
    this.property2 = value2;
    this.property3 = "";
  }

  method1() {}

  method2() {}
}

myClass.prototype //?