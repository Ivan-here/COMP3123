console.log("Hello World!");
console.log("This is an example JavaScript file");

function add(a, b) {
  return a + b;
}
console.log(typeof add);

const addition = (a,b) => {return a + b;};
const y = () => 1000

console.log(typeof 100); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (this is a known quirk in JavaScript)
console.log(typeof {}); // "object"
console.log(typeof []); // "object" (arrays are a type of object in JavaScript)
console.log(typeof function(){}); // "function"

function Student(name, age) {
  this.name = name;
  this.age = age;
  const self = this;
  this.greet = () => {
    console.log(self.name);
    console.log(self.age);
  }
}
const student = new Student("Ivan", 14);
student.greet()

Student.prototype.study = function (subject) {
  console.log(`${this.name} is studying ${subject}`);
}
student.study("Math");

console.log(typeof Student);

var s1 = new Student("Alice", 20);

const employee = {
  name: "Bob",
  age: 30,
  "city name": "New York",
  100: "This is a number key",
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

console.log(typeof employee); // "object"
employee.greet();
console.log(employee['age'])
console.log(employee['city name'])
console.log(employee[100])

//Made it in WEBSTORM
