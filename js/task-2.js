class Storage{
    #items;

    constructor(params) {
        this.#items = params;
    }

    getItems() {
        return this.#items;
    }

    addItem(newItem) {
        return this.#items.push(newItem);
    }

    removeItem(itemToRemove) {
        let indexDeleted = this.#items.indexOf(itemToRemove);
        if (indexDeleted > -1 ) {
            this.#items.splice(indexDeleted, 1);
        }
        //this.#items = this.#items.filter(elem => elem != itemToRemove);  
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

