//👉 Arrays store multiple records
//👉 Objects store details of each record
console.log("=== STUDENT MANAGEMENT SYSTEM ===");

// 🔹 1. CREATE ARRAY OF OBJECTS
let students = [
    {
        id: 1,
        name: "Rahim",
        age: 22,
        marks: 85
    },
    {
        id: 2,
        name: "Ali",
        age: 21,
        marks: 90
    }
];

console.log("\nInitial Students:");
console.log(students);

// 🔹 2. ADD NEW STUDENT (CREATE)
let newStudent = {
    id: 3,
    name: "Ahmed",
    age: 23,
    marks: 78
};

students.push(newStudent);

console.log("\nAfter Adding New Student:");
console.log(students);

// 🔹 3. READ DATA (ACCESS OBJECT INSIDE ARRAY)
console.log("\nAccess Specific Student:");
console.log(students[1].name); // Ali

// 🔹 4. UPDATE DATA
students[0].marks = 95; // Rahim updated

console.log("\nAfter Updating Rahim's Marks:");
console.log(students);

// 🔹 5. DELETE DATA
students = students.filter(student => student.id !== 2);

console.log("\nAfter Removing Ali:");
console.log(students);

// 🔹 6. LOOP THROUGH ARRAY OF OBJECTS
console.log("\nAll Students List:");
students.forEach(student => {
    console.log(
        student.name + " is " + student.age + " years old and got " + student.marks
    );
});



//An array is a special variable that stores multiple values in an ordered list.
const fruits = ["apple", "banana", "mango"];
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
const data = [10, "Rahim", true];


//An object is used to store data in key-value pairs.
const user = {
    name: "Rahim",
    age: 25,
    city: "Mirpur"
};
//1. Uses keys (not index)

console.log(user.name); // Rahim
console.log(user.age);  // 25

//🔹 1. length (not a function)
const arr = [10, 20, 30];

console.log(arr.length); // 3
//🔹 2. indexOf()
const fruits = ["apple", "banana", "mango"];

console.log(fruits.indexOf("mango")); // 2

//🔹 3. concat()
const a = [1, 2];
const b = [3, 4];

const result = a.concat(b);

console.log(result); // [1, 2, 3, 4]

//🔹 4. push()
const arr = [1, 2];

arr.push(3);

console.log(arr); // [1, 2, 3]

//🔹 5. pop()
const arr = [1, 2, 3];

arr.pop();

console.log(arr); // [1, 2]

//🔹 6. shift()
const arr = [1, 2, 3];

arr.shift();

console.log(arr); // [2, 3]

//🔹 7. unshift()
const arr = [2, 3];

arr.unshift(1);

console.log(arr); // [1, 2, 3]

//8. slice()

//👉 Copies part of array (does NOT change original)

const arr = [10, 20, 30, 40];

const newArr = arr.slice(1, 3);

console.log(newArr); // [20, 30]
console.log(arr);    // original unchanged

//9. splice()

//👉 Adds/removes elements (changes original array)
const arr = [10, 20, 30, 40];

arr.splice(1, 2); // remove 2 items from index 1

console.log(arr); // [10, 40]

//10. find()

//👉 Returns the first matching element
const nums = [5, 10, 15, 20];

const result = nums.find(n => n > 10);

console.log(result); // 15

//11. map()

//👉 Creates a new array by modifying each element
const nums = [1, 2, 3];

const doubled = nums.map(n => n * 2);

console.log(doubled); // [2, 4, 6]


//🔹 filter() method in JavaScript arrays (deep explanation)

//👉 The filter() method is used to create a NEW array containing only the elements that pass a condition
const numbers = [10, 15, 20, 25, 30];

const result = numbers.filter(num => num > 15);

console.log(result);