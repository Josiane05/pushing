const promise = new promise (function(resolve, reject){
    resolve('I am resolved promise!');
});

promise.then(result => console.log(result));