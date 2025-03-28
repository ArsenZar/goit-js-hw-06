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