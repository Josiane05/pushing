
class person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log("walk")
    }
}

class teacher extends person {
    constructor(name, degree) {
        super(name);
        this.degree = degree
    }

    teach() {
        console.log("teach");
    }
}

const teacher = new teacher("Mosh", "Msc");