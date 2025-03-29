/* practice-17 (child class constructor) */
class User {
  #email;

  constructor(email) {
    this.#email = email;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

class ContentEditor extends User {
  constructor(params) {
    // Виклик конструктора батьківського класу User
    super(params.email); 

    this.posts = params.posts;
  }
}

const editor = new ContentEditor({ 
	email: "mango@mail.com", 
	posts: [] 
});
console.log(editor); // { #email: "mango@mail.com", posts: [] }
console.log(editor.email); // "mango@mail.com"

//////////////////////////////////////////////////////////////////////////

/* practice-16 (extends with static prop) */
/*
class User {
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}


class Admin extends User{
  static role = {
    BASIC: "basic", 
    SUPERUSER: "superuser"
  }
}

console.log(Admin);
console.log(User);
*/

//////////////////////////////////////////////////////////////////////////

/* practice-15 (static prop and how we can use and chande them) */
/*
class User {
  static roles = {
    admin: "admin",
    editor: "editor",
		basic: "basic"
  };

  #email;
  #role;

  constructor(params) { 
    this.#email = params.email; 
    this.#role = params.role || User.roles.basic; 
  }

  get role() {
    return this.#role;
  }

  set role(newRole) {
    this.#role = newRole;
  }
}

const mango = new User({
  email: "mango@mail.com",
  role: User.roles.admin,
});

console.log(mango.role); // "admin"
mango.role = User.roles.editor;
console.log(mango.role); // "editor"
*/

//////////////////////////////////////////////////////////////////////////

/* practice-14 (privet methods) */
/*
class User {
  name;
  #email;

  constructor(params) {
    this.name = params.name;
    this.#email = params.email;
  }

  // Публічний метод для отримання електронної пошти
  getEmail() {
    return this.#email;
  }

  // Публічний метод для зміни електронної пошти
  changeEmail(newEmail) {
    if (this.#validateEmail(newEmail)) {
      this.#email = newEmail;
    } else {
      console.log('Invalid email format');
    }
  }

  // Приватний метод для валідації електронної пошти
  #validateEmail(email) {
    return email.includes('@');
  }
}

const mango = new User({
  name: 'Mango',
  email: 'mango@mail.com',
});

// Спробуємо змінити електронну пошту
mango.changeEmail('newmail.com'); // "Invalid email format"
mango.changeEmail('new@mail.com');
console.log(mango.getEmail()); // "new@mail.com"

// Прямий виклик приватного методу ззовні призведе до помилки
mango.#validateEmail('test'); // Помилка
*/

//////////////////////////////////////////////////////////////////////////

/* practice-13.1 (how to need work with privet data) */
/*
class User {
  name;
  #email;

  constructor(params) {
    this.name = params.name;
    this.#email = params.email;
  }

  getEmail() {
    return this.#email;
  }

  changeEmail(newEmail) {
    this.#email = newEmail;
  }
}

const mango = new User({
  name: "Mango",
  email: "mango@mail.com",
});

console.log(mango.getEmail()); // "mango@mail.com"
mango.changeEmail("mango@supermail.com");
console.log(mango.getEmail()); // "mango@supermail.com"
*/

//////////////////////////////////////////////////////////////////////////

/* practice-13 (privet date in class by #) */
/*
class User {
  // Необов'язкове оголошення публічних властивостей
  name;
  // Обов'язкове оголошення приватних властивостей
  #email;

  constructor(params) {
    this.name = params.name;
    this.#email = params.email;
  }
}

const mango = new User({
  name: "Mango",
  email: "mango@mail.com",
});
console.log(mango.name); // "Mango"
console.log(mango.#email); // Виникне помилка, це приватна властивість
*/

//////////////////////////////////////////////////////////////////////////

/* practice-12 (look at propertys of prototype class & how new prototype "mango" use date) */
/*
class User {
  constructor(params) {
    this.name = params.name;
    this.email = params.email;
  }

  getEmail() {
    return this.email;
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

const mango = new User({ 
	name: "Mango", 
	email: "mango@mail.com" 
});
console.log(User.prototype); // {getEmail: ƒ, changeEmail: ƒ}
console.log(mango);
//User {name: 'Mango', email: 'mango@mail.com'}
//email: "mango@mail.com"
//name: "Mango"
//[[Prototype]]: Object 
*/

//////////////////////////////////////////////////////////////////////////

/* practice-11 (work with "this" and methods of class) */
/*
class Car {
  constructor(params){
    this.brand = params.brand;
    this.model = params.model;
    this.price = params.price + "$";
  }
    
  getPrice(){
    return this.price;
  }

  changePrice(newPrice){
    return this.price = newPrice + "$";
  }
}

const firstCar = new Car({brand: "BMW", model: "X5", price: 58900});
console.log(firstCar);
firstCar.changePrice(55555);
console.log(firstCar);
*/

//////////////////////////////////////////////////////////////////////////

/* practice-10 (class take object of params) */
/*
class Car {
  constructor(params){
    this.brand = params.brand;
    this.model = params.model;
    this.price = params.price + "$";
  }
}

const firstCar = new Car({brand: "BMW", model: "X5", price: 58900});
console.log(firstCar);
*/

//////////////////////////////////////////////////////////////////////////

/* practice-9 (create first class) */
/*
class Car {
  constructor(brand, model, price){
    this.brand = brand;
    this.model = model;
    this.price = price + "$";
  }
}

const firstCar = new Car("BMW", "X5", 58900);
console.log(firstCar);
*/

//////////////////////////////////////////////////////////////////////////

/* practice-8 (2 level clone prototype) */
/*
const objC = { c: "objC prop" };

const objB = Object.create(objC);
objB.b = "objB prop";

const objA = Object.create(objB);
objA.a = "objA prop";

console.log(objA); // { a: "objA prop", [[Prototype]]: objB }
*/

//////////////////////////////////////////////////////////////////////////

/* practice-7 (how to output key of object without prototype properties) */
/*
const animal = { legs: 4 };
const dog = Object.create(animal);
dog.name = "Mango";
dog.sho = "shoto";

console.log(Object.keys(dog)); // ["name"]
console.log(Object.values(dog)); // ["Mango"]

for(const key of Object.keys(dog)) {
	console.log(key); // "name"
}
*/

//////////////////////////////////////////////////////////////////////////

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