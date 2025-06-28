const para = document.createElement('p');
para.textContent = 'Hello, World!';
document.body.appendChild(para);
console.log(document.body.lastChild.textContent);