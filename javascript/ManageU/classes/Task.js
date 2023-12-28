export default class Task {
    constructor(descripion) {
        this.descripion = descripion;
        this.id = Math.floor(Math.random() * 1000);
        this.completed = false;
    }
    get(propName) {
        return this[propName];
    }
    set(propName, newValue) {
        this[propName] = newValue;
    }
}