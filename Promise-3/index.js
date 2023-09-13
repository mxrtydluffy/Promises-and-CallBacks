function greet(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof name === 'string') { 
        resolve('hello ' + name);
      } else {
        reject('Greet expects a string!');
      }
    }, 1000);
  });
}

function uppercaser(str) {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      if (typeof str === 'string') {
        resolve(str.toUpperCase());
      } else {
        reject('Argument to uppercaser must be string');
      }
    }, 1000);
  });
}

// Above we have two functions that return promises. 
// These are greet and uppercaser. 
// Notice below how we chain these promises together. The 
// Result of one is then passed to the next. 
// When chained all of the promises have to resolve for success. 
// If any of the promises reject then you end in the catch block. 

greet('Your name') // Returns a Promise
  .then(str => uppercaser(str))  // Upper case the results from greet() Returns a Promise
  .then(str => console.log(str)) // Log the results of uppercaser()
  .catch(err => console.log(err)) // Catches an error

// Challenges: get greet() to fail by passing a non string value
// What happens? 
greet('7.5') // Returns a Promise
  .then(str => uppercaser(str))
  .then(str => console.log(str))
  .catch(err => console.log(err))

// This greet() function rejects the promise since I entered a float.
// The message appears as "Greet expects a string via the .catch()"

// Challenge: get uppercaser() to fail by passing a non string value
// What happens?
uppercaser(7.5)
  .then(str => console.log(str))
  .catch(err =>console.log(err));

// There the uppercaser function treats the input as a string. Since a float is
// being passed and will display error message as 'Argument to uppercase must
// be a string'.

// Challenge: Notice there is only a single .catch() at the end. 
// Explain the behavior?

// A single .catch() block is used to handle errors that might occur in the preceding.
// When a promise completes the operation, the control flows to the nearest .then() block.
// If an error occurs in any of the preceding .then() blocks, the control flows to the nearest .catch() block.
// This is beneficial because it allows for compact error handling instead of having more than one error handlers.