// Atvedus savo draugą į CodeAcademy Kids būrelį gausite vieną nemokamą mėnesį, 
// kurį galėsite dalintis su savo draugu per pusę (50/50), arba pasilikti visą nemokamą mėnesį sau! Kuo daugiau atvesite draugų 
// tuo daugiau nemokamų mėnesių gausite.


// var, let and const - what, why and how - ES6

// VAR

for (var i = 0; i < 10; i++) {
    console.log(i);
}

// normal languages would isolate i to { } scope, but var alows it to escape. Imagine writting new loop with i, it would fail, as i is
// already declared in upper scope.
console.log('after loop', i);

// wrapping in function helps
counter = () => {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
}
counter();

console.log('after', i); //this will throw error, because var is function scoped;

// "use strict"
// does not allow to use undeclared values;


var i = 999999999; //same name

(() => {
    for (var i = 0; i < 10; i++) {  //same name, but it works because it is scoping to function;
        console.log(i);
    }
})()

console.log('after', i);


//LET

var i = 99999999;
for(let i = 0; i< 10; i++){ //scope level { }
    console.log(i);
}

console.log('after'+i);

//CONST

// USE : for values which will never change. Pvz: math.PI.
// once the variable is assigned it can't be assigned again, trying to reasign it will throw an error.

const dog={
    age: 3
  }
  dog.age = 5 //we are not changing the dog, so its fine
  dog = { name: 'biko'} //we are assigning the dog to other object, hence it will throw an error.

// ANTRA PAMOKA
// OOP vs Functional programming

//functional programming:
// pure functions without any side effects. Functions which return same result, if called with same data.

function pureFunc(x) { 
    return 2 * x 
  }
  var y = 2
   
  function impureFunc(x) {   
    y = y + x   
    return y 
  }

  // functions are first class citizens
function addTwo (x) { return x + 2 }
function logger (f, value) { 
  console.log(f(value)) 
}
logger(addTwo, 2)

//you can pass around and return functions, as if they were variables

function namedFunc () { 
    return function () { … } 
  }

//closures
function outer(word) {
    return function inner() {
      return word + ' ?'
    }
  }
//inner function has accress to surrounding function's data, even when outer function has returned

//OOP
// From the OOP perspective, an application is a collection of “objects” that communicate with each other. 
// We base these objects on things in the real world, like products in inventory or employee records. 
// Objects contain data and perform some logic based on their data. As a result, OOP code is very easy to understand. 
// What is not so easy is deciding how to break an application into these small objects in the first place.

//Without OOP
const bread = {name: 'Bread', price: 1};
const water = {name: 'Water', price: 0.25};
const basket = [];
basket.push(bread);
basket.push(bread);
basket.push(water);
basket.push(water);
basket.push(water);
const total = basket
  .map(product => product.price)
  .reduce((a, b) => a + b, 0);
console.log('one has to pay in total: ' + total);

//With OOP
const bread = new Product('bread', 1);
const water = new Product('water', .25)
const basket = new Basket();
basket.addProduct(2, bread);
basket.addProduct(3, water);
basket.printShoppingInfo();

// We use classes in OOP as templates for creating objects. An object is an “instance of a class” and “instantiation” 
// is the creation of an object based on a class. The code is defined in the class but can’t execute unless it is in a 
// live object.

// Objects modeled on real-world things are the centerpiece of any OOP-based application.
// Encapsulation protects data from uncontrolled access.
// Objects have functions that operate on the data the objects contain.
// Classes are the templates used to instantiate objects.
// Inheritance is a powerful tool for avoiding redundancy.
// OOP is more verbose but easier to read than other coding paradigms.
// Since OOP came later in JavaScript’s development, you may come across older code that uses prototype or functional programming techniques.

// ES6 version
class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  class Book extends Product {
    constructor(name, price, author) {
      super(name, price);
      this.author = author;
    }
  }
  class Basket {
    constructor() {
      this.products = [];
    }
    addProduct(amount, product) {
      this.products.push(…Array(amount).fill(product));
    }
    calcTotal() {
      return this.products
        .map(product => product.price)
        .reduce((a, b) => a + b, 0);
    }
    printShoppingInfo() {
      console.log('one has to pay in total: ' + this.calcTotal());
    }
  }
  const bread = new Product('bread', 1);
  const water = new Product('water', 0.25);
  const faust = new Book('faust', 12.5, 'Goethe');
  const basket = new Basket();
  basket.addProduct(2, bread);
  basket.addProduct(3, water);
  basket.addProduct(1, faust);
  basket.printShoppingInfo();


