
//alert();

// console.log()


// https://itnext.io/10-console-tricks-to-debug-like-a-pro-66ee2225ec57
// console.trace()

foo = () => {
    bar = () => {
      console.trace();
    }
    bar();
  }
  foo();

// console.time() and console.timeEnd()
// time starts the times, timeEnd() ends it. Good for measuring performance.

console.memory;

console.table({
    name:'Karolis', age: 28,
    name: 'Tomas', age: 54
})

// debugger;
// aktyvuoja chrome debugeri

//error handling

const a = 5

try {
    console.log(b) // b is not defined, so throws an error
} catch (err) {
    console.error(err) // will log the error with the error stack
} finally {
    console.log(a) // will always get executed
}

