function Person() {
  this.name = "";
  this.surname = "";
}

function Programmer() {
  this.knowLanguage = "";
}

Programmer.prototype = new Person();

function writeFullName(p) {
  console.log(p.name + " " + p.surname);
}

var a = new Person();
a.name = "John";
a.surname = "Smith";

var b = new Programmer();
b.name = "Ryan";
b.surname = "Ray";
b.knowLanguage = "Javascript";

writeFullName(a)
writeFullName(b)