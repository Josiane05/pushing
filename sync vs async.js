console.log('introduction to Promises!');

let promise = new promise(function (resolve, reject){
    //got the water
    let value = 'water'
    resolve ('value');
}); 


let promiseError = new promise(function (resolve, reject){
    //opps, jack fell down
    reject(new Error("Disasters"));
});
