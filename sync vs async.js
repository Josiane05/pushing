
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
        permission: ['db', 'hr', 'dev']
    }
    resolve (user);
})
getUser
.then(function(user) {
    console.log(`Got user ${user.name}`);

    //return another promise with user address

    if (user.permission.includes('hr')) {
        throw new Error ('you are not allowed');
    }
})
.then(function(email){
    console.log(`user email is ${email}`);
})
.catch(function(error) {
    console.log(error);
})

const number = new promise(function(resolve, reject) {
    resolve(10);
})

number.then(function(value) {
    value++;
    return value;
}).then(function(value) {
    value = value + 10;
    return value;
}).then(function(value){
        value = value + 20;
     console.log(value);    
});


