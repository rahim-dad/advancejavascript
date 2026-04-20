// function declaration

sayHello(); // ✅ Works because of hoisting

function sayHello() {
    console.log("Hello Rahim");
}

processPayment(500);

function processPayment(amount) {
    if (amount > 0) {
        console.log("Payment of " + amount + " processed");
    } else {
        console.log("Invalid amount");
    }
}

// function expression 
//A function expression is when a function is stored inside a variable

const greet = function(name) {
    return "Hello " + name;
};


processPayment(500); // ❌ Error

const processPayment = function(amount) {
    if (amount > 0) {
        console.log("Payment of " + amount + " processed");
    } else {
        console.log("Invalid amount");
    }
};



// arrow function with this bindling

const user = {
    name: "Rahim",
    greet: function() {
        setTimeout(() => {
            console.log("Hello " + this.name);
        }, 1000);
    }
};

user.greet();


//Parameter (Input Placeholder)
//It acts as a placeholder for data
function greet(name) {   // ← "name" is a parameter
    console.log("Hello " + name);
}


//Argument (Actual Value)
//An argument is the real value you pass into the function when calling it.
greet("Rahim");   // ← "Rahim" is an argument


//🔹 3. Return Value (Output)

//A return value is what a function sends back after execution.
function add(a, b) {
    return a + b;   // ← return value
}

let result = add(5, 3);
console.log(result); // 8

function calculateFinalPrice(price, discount) { // parameters
    let finalPrice = price - (price * discount / 100);
    return finalPrice; // return value
}

// arguments
let result1 = calculateFinalPrice(1000, 10);
let result2 = calculateFinalPrice(500, 20);

console.log(result1); // 900
console.log(result2); // 400


// function hoisting
//Hoisting means JavaScript moves function declarations to the top of their scope during compilation.


sayHello(); // ✅ Works

function sayHello() {
    console.log("Hello Rahim");
}

//✔ Behind the scenes:

//JavaScript treats it like:

function sayHello() {
    console.log("Hello Rahim");
}

sayHello();

printMessage(); // ✅ Works
printMessage2(); // ❌ Error

function printMessage() {
    console.log("Function Declaration");
}

var printMessage2 = function() {
    console.log("Function Expression");
};

//🔹 1. Global Scope
//A variable declared outside any function or block is global.
let name = "Rahim"; // global

function showName() {
    console.log(name);
}

showName(); // Rahim


//🔹 2. Function Scope
//Variables declared inside a function are only available inside that function.
function test() {
    let age = 25; // function scope
    console.log(age);
}

test(); // 25
console.log(age); // ❌ Error

//🔹 3. Block Scope (let and const)
if (true) {
    let x = 10;
    const y = 20;
    console.log(x, y); // 10 20
}

console.log(x); // ❌ Error
console.log(y); // ❌ Error

let appName = "MyApp"; // global

function loginUser(username, password) {
    let isAuthenticated = false; // function scope

    if (username === "admin" && password === "1234") {
        let message = "Login Successful"; // block scope
        isAuthenticated = true;
        console.log(message);
    }

    // console.log(message); ❌ Error (block scope)

    if (isAuthenticated) {
        console.log(username + " logged into " + appName);
    } else {
        console.log("Login failed");
    }
}

loginUser("admin", "1234");

