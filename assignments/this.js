/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. If `this` is used in an object without any reference to that object, it will automically refer to the window object.

* 2. When you create an object that has properties and methods in it. while trying to access the method or the property,
     you type the object name dot the property or method, the object name is changed to 'this' dot method.

* 3. Constructor functions are used to create an object. An instance or duplicate of the object is created 
     when we use the new keyword while invoking the constructor function.

* 4. Call and apply is used when you expliticly want to access this.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function guessName(name) {
  //  console.log(this);
  return `is your name ${name}`;
}
guessName("kelechi");

// Principle 2
// code example for Implicit Binding

const me = {
  name: "sandra",
  age: "12",
  greetMe: function() {
    return `Hi ${this.name}, It's nice to meet you`;
  },
  check: function() {
    console.log(this);
  }
};
me.check();

// Principle 3
// code example for New Binding

function CalcShape(width, heigth) {
  this.width = width;
  this.heigth = heigth;
}
CalcShape.prototype.multiply = function() {
  return this.width * this.heigth;
};
const square = new CalcShape(4, 3);
console.log(square.multiply());

// Principle 4
// code example for Explicit Binding

function Rectangle(width, heigth, length) {
  CalcShape.call(this, width, heigth);
  this.length = length;
}
Rectangle.prototype.multiply = function() {
  return this.heigth * this.width * this.length;
};
const rectangle = new Rectangle(2, 3, 5);
console.log(rectangle.multiply());
