
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

//finally() handler method: it doesn't process the result beacause it doesnt pass any result to the next handler

//Async/Await: they are keywords that make the usage of of promises dramatically easy, they just contribute to enhance the javascript language synthax it doesnt introduce any new programing concept
 //- we use Async to return a  promise 
 //- we use Await to wait and handle promise

 async function fetchUserDetails(userId) {
    // pretend we are making async call

    return {'name': 'Robin','like': ['pizza']};
 }
//rules for await
//1. you cannot use the await keyword on the regular non sync function
 async function caller() {
    const user = await fetchUserDetails ();
    console.log(user);
 }

 caller();
 
 function getHi () {
    return "hi";
 }

 async function caller1 (){
    const message = await getHi ();
    console.log(message);
 }

 const validateUser = ({userId, password}) => {
    return new promise((resolve, reject) => {
        if (userId && password) {
            resolve('autheticated')
        } else reject({message: 'userId or password is missing'});
    })
 }  

 const app = sync () => {
    const data = {
        userId:'',
        password:''
    }
    const result = await validateUser (data);
    console.log(result);
}