import { person } from "./person";
export function promote () {}
export class teacher extends person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }
    teach() {
        console.log("teach");
    }
}