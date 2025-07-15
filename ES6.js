const first = { name: 'JOSIANE'};
const second = { job: 'IT'};
const clone = {...first};
console.log(clone);

class person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log("walk")
    }
}

const person = new person ('JOSIANE');