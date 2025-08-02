
//promise chain

console.log('promise chain');

//create promise

const promise = new promise(function (resolve, reject) {
    console.log('resolving fake promise');
});

//handle it using the .then() method
// .then()method take another callback function with the resolved value

promise.then(function(value) {
    console.log('value');
})

