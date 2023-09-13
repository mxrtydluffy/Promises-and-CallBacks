// Make a new Promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject("--- Oops ---");
    resolve('>>> Success! <<<');
  }, 2000);
});

p.then((message) => {
  console.log('Promise resolved! 😀');
  console.log(message);
}).catch((err) => {
  console.log('Promise rejected! 😞');
  console.log(err);
});

// ****************************** //

const pp = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('>>> Success! <<<');
    reject("--- Oops ---");
  }, 2000)
});

pp.then((message) => {
  console.log('Second promise resolved!')
  console.log(message);
}).catch((err) => {
  console.log('Promise 2 rejected!');
  console.log(err)
});

// **Problems to solve**

// **1)** What happens when a promise is rejected? Test it by calling `reject()`
  // When the promise is rejected, the .catch() block will execute --- Oops ---

// **2)** What happens when you call both `resolve` and `reject`? Test this.
  // Only the first one is displayed and the following one will be ignored.

// **3)** Does the order matter you call resolve and reject matter? Test this.
  // The order matters because the state can't rechange. Meaning if a state transition from to 
  // either "pending", "rejected" or "fulfilled" there is no roundabout. The promise can either
  // have a sucessful output and have no adjustment.

// **4)** What happens if you call `resolve` or `reject` more than once? Test this out for yourself.
  // Going off question #3, if the promise state can't be changed depending how much it has been called.