const food = new Promise((resolve, reject) => {
  setTimeout (() => {
    resolve('Pizza');
    reject("--- Rejected! ---");
  }, 2000);
});

// resolve food here: 
food.then((message) => {
    console.log('Promise resolved! 👍🏽');
    console.log(message);
}).catch((err) => {
    console.log('Promise rejected! 👎🏽');
    console.log(err);
});


// **Challenge 1** Resolve your promise with the name of your favorite food. 
// Do this by calling the `resolve` with an argument. 

// **Challenge 2** Resolve the promise `food` with the `.then()` syntax 
// and print your favorite food to the console.