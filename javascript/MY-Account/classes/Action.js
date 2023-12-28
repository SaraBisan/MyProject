export default class Action {
    constructor(type, descripion, amount) {
        this.type = type;
        this.descripion = descripion;
        this.amount = type == "income" ? amount : -amount;
        this.id = Math.floor(Math.random() * 1000);
    }
    get(propName) {
        return this[propName];
    }
    set(propName, newValue) {
        this[propName] = newValue;
    }
}