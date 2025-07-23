// a synchronous => not accuring at the same time

// fetch data from server
// want to execute something with a delay
// want to execute something after an event

//  1.browser APIs / web APIs
// setTimeout, mouse over, click

// 2.promises => unique javascript object that allow you to make asynchronous operations

function printMe() {
    console.log('print me');
}
 function test() {
    console.log('test');
 }
setTimeout(printMe, 2000);
test();
