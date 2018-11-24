// abstract complex object
// this refers to current object space.

console.log(this);

let myCar = {
    maxSpeed: 70,
    driver: 'John',
    drive: () => {
        console.log('brum brum');
    },
    test: () => {
        console.log(this);
    },
    logDriver: () => {
        console.log(`driver name is ${this.driver}`);
    }
}

let myCar2 = {
    maxSpeed: 70,
    driver: 'Tom',
    drive: () => {
        console.log('brum brum');
    },
    test: () => {
        console.log(this);
    },
    logDriver: () => {
        console.log(`driver name is ${this.driver}`);
    }
}

let dog = {
    sound: 'woof',
    talk: () => {
        console.log(this.sound);
    }
}

dog.talk(); //woof
//  I can assign function to variable, because js is functional programming. Functions are first class citizens,
//  which is unusual in other languages. JS has higher order functions (functions can take other functions as arguments);
let talkFunction = dog.talk; //when we assign method (function which is in object) to a variable, it becomes functions. It gets detached
//                            from it's object, and looses it's 'this' context.
talkFunction() //undefined

//same as

let talkFunction = () => {
    console.log(this.sound);
}


// https://medium.freecodecamp.org/javascript-closures-simplified-d0d23fa06ba4

// A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables — a scope chain.

// The closure has three scope chains:

// it has access to its own scope — variables defined between its curly brackets
// it has access to the outer function’s variables
// it has access to the global variables
// To the uninitiated, this definition might seem like just a whole lot of jargon!

function outer() {
    var b = 10;
    function inner() {
         
          var a = 20; 
          console.log(a+b);
     }
    return inner;
 }

 // -----------------------------------------------------------

 function outer() {
    var b = 10;
    function inner() {
         
          var a = 20; 
          console.log(a+b);
     }
    return inner;
 }
 var X = outer(); //outer() invoked the first time
 var Y = outer(); //outer() invoked the second time

    //  Variable b is created, its scope is limited to the outer() function, and its value is set to 10.
    // The next line is a function declaration, so nothing to execute.
    // On the last line, return inner looks for a variable called inner, finds that this variable inner is actually a function, 
    // and so returns the entire body of the function inner.
    // [Note that the return statement does not execute the inner function — a function is executed only when followed 
    // by () — , but rather the return statement returns the entire body of the function.]
    // The contents returned by the return statement are stored in X.
    // Thus, X will store the following:
    // function inner() { 
    //  var a=20; 
    // console.log(a+b); 
    // }
    // Function outer() finishes execution, and all variables within the scope of outer() now no longer exist.
    // This last part is important to understand. Once a function completes its execution, any variables that 
    // were defined inside the function scope cease to exist.

    function outer() {
        var b = 10;
        function inner() {
             
              var a = 20; 
              console.log(a+b);
         }
        return inner;
     }
    
    outer()(); //outer() invoked the first time

    // The lifespan of a variable defined inside of a function is the lifespan of the function execution.

    // What this means is that in console.log(a+b), the variable b exists only during the execution of the the outer() function. 
    // Once the outer function has finished execution, the variable b no longer exists.

    // When the function is executed the second time, the variables of the function are created again, and live only up until 
    // the function completes execution.

    // Thus, when outer() is invoked the second time:

    // A new variable b is created, its scope is limited to the outer() function, and its value is set to 10.
    // The next line is a function declaration, so nothing to execute.
    // return inner returns the entire body of the function inner.
    // The contents returned by the return statement are stored in Y.
    // Function outer() finishes execution, and all variables within the scope of outer() now no longer exist.
    // The important point here is that when the outer() function is invoked the second time, the variable b is created anew. 
    // Also, when the outer() function finishes execution the second time, this new variable b again ceases to exist.

    // This is the most important point to realize. The variables inside the functions only come into existence when the function is 
    // running, and cease to exist once the functions completes execution.

    // In our example, the inner function had preserved the value of b=10 when the outer() function was executed, 
    // and continued to preserve (closure) it.
    // It now refers to its scope chain and notices that it does have the value of variable b within its scope chain,
    // since it had enclosed the value of b within a closure at the point when the outer function had executed.
    // Thus, JavaScript knows a=20 and b=10, and can calculate a+b.


    // undefined
    
    console.log(a); //a is not defined

    let a;

    console.log(a);

    if (a === undefined) {
        alert('undefined!');
    }


    // a = undefined //never do this!
    // undefined - I never set this value!
