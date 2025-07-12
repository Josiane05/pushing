const person = {
    name: 'JO',
    walk() {
        console.log(this);
    }
};

person.walk();

const walk = person.walk;
console.log(walk);