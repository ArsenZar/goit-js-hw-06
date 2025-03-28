/* practice-7 (how to output key of object without prototype properties) */
const animal = { legs: 4 };
const dog = Object.create(animal);
dog.name = "Mango";
dog.sho = "shoto";

console.log(Object.keys(dog)); // ["name"]
console.log(Object.values(dog)); // ["Mango"]

for(const key of Object.keys(dog)) {
	console.log(key); // "name"
}


/* practice-6 (prototype) */
/*
const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};

const child = Object.create(parent);
child.name = "Jason";
child.age = 27;

console.log(child);
*/

//////////////////////////////////////////////////////////////////////////

/* practice-5 (use this in bace func and with arrow func)  */
/*
const showThis = () => {
  console.log("this in showThis: ", this);
};

showThis.call({ username: "Mango" }); // this in showThis: window
showThis.apply({ username: "Mango" }); // this in showThis: window

function showThisContext(){
  console.log("this in showThis: ", this);
};

showThisContext.call({ username: "Mango" }); // this in showThis: { username: "Mango" }
showThisContext.apply({ username: "Mango" }); // this in showThis: { username: "Mango" }
*/

//////////////////////////////////////////////////////////////////////////

/* practice-4 (use bind like parametr in callback func) */
/*
"use strict";

const library = {
	books: 1923,
	logBookCount() {
		console.log(this.books);
	}
};

function showBooks(callback) {
	callback()
}

showBooks(library.logBookCount.bind(library));
*/

//////////////////////////////////////////////////////////////////////////

/* practice-3 (call, apply - use array, bind - create new func with context which we can use later) */
/*
function sayHello(greeting) {
  console.log(`${greeting}, ${this.name}!`);
}

const user = {
  name: "Alice"
};

const greet = sayHello.bind(user);

greet("Hello");
*/

//////////////////////////////////////////////////////////////////////////

/*practice-2 (context - how to use object for give function context )*/
/*
"use strict";

function showThis() {
  console.log("this in showThis: ", this);
}

const user = {
  username: "Poly",
};

user.showContext = showThis;

// Викликаємо в контексті об'єкта
user.showContext(); // this in showThis: {username: "Poly", showContext: ƒ}

// Викликаємо в глобальному контексті
showThis(); // "this in showThis: undefined"
*/

//////////////////////////////////////////////////////////////////////////

/*practice-1 (this)*/
/*
const user = {
  username: "Victor",
  showName() {
		// ❌ Віктор біжить швидко, тому що Віктор намагається зловити поїзд
    console.log(user.username);
  },
};

user.showName();


const user = {
  username: "Victor",
  showName() {
		// ✅ Віктор біжить швидко, тому що він (this) намагається зловити поїзд.
    console.log(this.username);
  },
};

user.showName();

 
*/