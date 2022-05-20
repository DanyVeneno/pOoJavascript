// while properties represent data, methods represent actions
function showFullName() {
  return "John Smith";
}

const john = {};

john.showFullName = showFullName;

// we can assign a method inside its literal representation

const joe = {
  name: "Joe",
  surname: "Carter",
  showFullName: function () {
    return "Joe Carter";
  },
};

// and in ECMASCRIPT 2015, we can assign a method this way as well
const ryan = {
  name: "Ryan",
  surname: "Ray",
  showFullName() {
    return "Ryan Ray";
  },
};

// the last method always display the same name, to avoid it, we can use this keyword

const account = {
  amount: 100,
  owner: 'Ryan Ray',
  deposit() {
    console.log(this)
  }
}

console.log(account)
console.log(account.deposit())

// we can using this to acess properties
const account30 = {
  name: "Jose",
  lastname: "Perez",
  ammount: 1000
}
account30.printInfo = function () {
  return this.name + " " + this.lastname + ' has ' + this.ammount + '$'; 
};

console.log(account30.printInfo())


// with classes
class Rectangle {
  constructor(heigh, width) {
    this.heigh = heigh;
    this.width = width
  }

  get area() {
    return this.getArea()
  }

  getArea() {
    return this.heigh * this.width;
  }
  
}

const rectangle = new Rectangle(10, 10)
console.log(rectangle.area)