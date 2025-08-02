
//promise chain

console.log('promise chain');

//create promise

const promise = new Promise(function (resolve, reject) {
    reject(new Error('rejecting a fake promise'));
});

//handle it using the .then() method
// .then()method take another callback function with the resolved value, it help to know that our promise has been resolved

promise.catch(function(error) {
    console.log(error);
})

//.catch()method it handle the rejected scenario


// three tings you can do in .then()method
//1. return another promise
//2. return a synchronous promise
//3. throw/return an Error

//create a promise to get a user

let getUser = new Promise(function (resolve, reject) {
    const user = {
        name: 'John Doe',
        email: 'john@email.com',
        password: 'password',
    }
    resolve (user);
})
getUser
.then(function(user) {
    console.log(`Got user ${user.name}`);

    //return another promise with user address

    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            resolve('Bangalore');
        }, 1000)
    })
})
.then(function(address){
    console.log(`user address is ${address}`);
})