// .then();
// .catch();
// .finally();
let promise = new promise(function (resolve, reject){
    //got the water
    let value = 'water'
    resolve ('value');
}); 

promise.then(function(result) {
    console.log(result);
});