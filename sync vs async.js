// a synchronous => not accuring at the same time

// fetch data from server
// want to execute something with a delay
// want to execute something after an event

//  1.browser APIs / web APIs
// setTimeout, mouse over, click

// 2.promises => unique javascript object that allow you to make asynchronous operations

function f1() {
    console.log('f1');
}

function f2() {
    console.log('f2');
}
function main() {
    console.log('main')
    setTimeout(f1,f2,2000);
}

main();

