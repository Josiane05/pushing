// 1.covert number intos string
const stringToNumber = function(str) {
    return Number(str);
}

//2.remove the axclamation mark
function removeExclamationMarks(s) {
  return s.replace(/!/g, '');
}
console.log(removeExclamationMarks("Hello! World!"));  


