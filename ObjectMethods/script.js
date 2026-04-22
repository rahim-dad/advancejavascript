//Rest operator
//collect multiple function arguments
// when a function can take many inputs the rest operator gather them into array
//rest properity always comes in the end
// infinite arguments ko lani me help krta hnn

function sum(name, course, ...args) {
    console.log(args);
    document.write(`hello ${name} of ${course}: `);
    let total = 0;
    for (let i in args) {
        total += args[i];
    }
    document.write(total + "<br>");
}

sum("rd", "btech", 20, 30, 40);
sum("kd", "computer arts", 20, 30, 40);
sum("jd", "computer science", 20, 30, 40);


//example 02
let arr = [10, 20, 30, 40, 50];
let [frist, second, ...rest] = arr;
console.log(frist); //10
console.log(second); //20
console.log(rest); //[30,40,50]


//example 03
let student = {
    name: "rahim",
    age: 22,
    course: "cs",
    city: "lahore"
};

let { name, ...otherdetails } = student;
console.log(name); //rahim
console.log(otherdetails); //{age:22, course:"cs", city:"lahore"}


//object.keys() in javascript
//onject.keys() is the build in javascript methods
//get all properity names of an object
//it return them as array
//objects keys it only return keys not values
//to loop through object
//object are not directly iterable likes array
//so we use object key to loop

let student2 = {
    name: "rahim",
    age: 22,
    course: "cs"
};

let key = Object.keys(student2);
console.log(key);
//["name","age","course"]


//Destruturing{}
//taking values out of an object/array and store them in variables easily
//object destructuring
let student3 = {
    name: "rahim",
    age: 22,
    course: "cs"
};

let { name: name2, age } = student3;
console.log(name2); //rahim
console.log(age); //22


//array destructuring
let numbers = [10, 20, 30];
let [a, b, c] = numbers;
console.log(a); //10
console.log(b); //20
console.log(c); //30



//object.assign() in javascript
//copy properity from one or more objects into another object
// in simple words take data from object and put them into another object

let target = { a: 1 };
let source = { b: 2 };
Object.assign(target, source);
console.log(target);
//{a:1,b:2}

//source properity copies into target 
//copying multiple objects
let obj1 = { a: 1 };
let obj2 = { b: 2 };
let obj3 = { c: 3 };
let result = Object.assign({}, obj1, obj2, obj3);
console.log(result);
//{a:1,b:2,c:3}

//if same key exists last one wins

let obj4 = { name: "rahim" };
let obj5 = { name: "ali" };
let result2 = Object.assign({}, obj4, obj5);
console.log(result2);
//{name:"ali"}