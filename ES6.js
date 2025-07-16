
class person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log("walk")
    }
}

class teacher extends person {
    constructor(name, degree) {}

    teach() {
        console.log("teach");
    }
};

const teacher = new teacher("Mosh")