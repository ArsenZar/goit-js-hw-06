
class StringBuilder {
    #value;
    constructor(param) {
        this.#value = param;
    }

    getValue() {
        return this.#value;
    }

    padStart(elem) {
        return this.#value = elem + this.#value;
    }

    padEnd(elem) {
        return this.#value = this.#value + elem;
    }

    padBoth(elem) {
        return this.#value = elem + this.#value + elem;
    }
}


const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
