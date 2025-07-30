// 1.covert number intos string
const stringToNumber = function(str) {
    return Number(str);
}

//2.remove the axclamation mark
function removeExclamationMarks(s) {
  return s.replace(/!/g, '');
}
console.log(removeExclamationMarks("Hello! World!"));  
//remove space
function noSpace(x) {
  return x.replace(/ /g, '');
}

console.log(noSpace("Hello World"));     
console.log(noSpace(" Remove all spaces "));



