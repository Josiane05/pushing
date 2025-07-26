// .then(); => it return the promise from it,hansle reject scenario
// .catch(); => it handle reject scenario
// .finally();
let promise = new promise(function (resolve, reject){
    //got the water
    let value = 'water'
    resolve ('value');
}); 

const grandParentCooking = () => { 
    promise.then(function(result) {
    console.log(`cooking with $ {result}`);
});
}

grandParentCooking();