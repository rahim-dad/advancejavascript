
/******************************************************
 🔥 This file CONTAINS reusable functions (EXPORTS)
******************************************************/

// Named export: function to greet a person
export function sayHello(name) {
  console.log("Hello " + name + " 👋");
}

// Named export: function to greet good morning
export function goodMorning(name) {
  console.log("Good Morning " + name + " 🌞");
}

// Default export: one main function
export default function welcome(name) {
  console.log("Welcome " + name + " 🎉");
}