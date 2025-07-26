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

//promise state(internal)
//- pending: when execution start
//-fullfilled: when resolves successfully
//-rejcted: when promise rejectes

//if promise fullfilled/rejected => settled

//results

//-Undefined: initial phase when state is pending
//-resolve: when promise resolves successfully
//-Error: when promise is rejects
