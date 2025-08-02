
//promise chain

console.log('promise chain');

//create promise

const promise = new promise(function (resolve, reject) {
    reject(new Error('rejecting a fake promise'));
});

//handle it using the .then() method
// .then()method take another callback function with the resolved value, it help to know that our promise has been resolved

promise.catch(function(error) {
    console.log(error);
})

//.catch()method it handle the rejected scenario
