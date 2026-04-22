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
//object is the data structure used to store multiple related value 
//can store number,string,array,function
const user = {
    name: "Rahim",
    age: 25,
    city: "Mirpur"
};
//1. Uses keys (not index)

console.log(user.name); // Rahim
console.log(user.age);  // 25

//🔹 1. length (not a function)
//return the number of elements in the array
const arr = [10, 20, 30];

console.log(arr.length); // 3
//🔹 2. indexOf()
const fruitss = ["apple", "banana", "mango"];

console.log(fruitss.indexOf("mango")); // 2

//🔹 3. concat()
//the cancat method in javascript is used to merge two or more arrays and return new array
const a = [1, 2];
const b = [3, 4];

const result = a.concat(b);

console.log(result); // [1, 2, 3, 4]

//🔹 4. push()
//push method in javascript is used to add one or more elements in the array
const arr1 = [1, 2];

arr1.push(3);

console.log(arr1); // [1, 2, 3]

//🔹 5. pop()
//pop method in the javascript is used to remove the last element from the array
const arr2 = [1, 2, 3];

arr2.pop();

console.log(arr2); // [1, 2]

//🔹 6. shift()
//shift method is used to remove frist element from the array

const arr3 = [1, 2, 3];

arr3.shift();

console.log(arr3); // [2, 3]

//🔹 7. unshift()
//added at the start of the array
const arr4 = [2, 3];

arr4.unshift(1);

console.log(arr4); // [1, 2, 3]

//8. slice()

//👉 Copies part of array (does NOT change original)

const arr5 = [10, 20, 30, 40];

const newArr = arr5.slice(1, 3);
//3=last index-1

console.log(newArr); // [20, 30]
console.log(arr5);    // original unchanged

//9. splice()

//👉 Adds/removes elements (changes original array)
//the splice methods in javascript array is used add,remove,replace elements in array

let counting =["one","two","three","four","five"];
let remove= counting.splice(2,0,"hello","rahim");
//index=2 and 3=three,four,five
console.log("remove" +remove);
console.log("original" +counting);

//example 2


const arr6 = [10, 20, 30, 40];

arr6.splice(1, 2); // remove 2 items from index 1

console.log(arr6); // [10, 40]

//10. find()

//👉 Returns the first matching element
//find () goes through the array and return the frist value that match the condition
//if nothing match it return undefined

const nums = [5, 10, 15, 20];

const results = nums.find(n => n > 10);

console.log(results); // 15

//11. map()

//👉 Creates a new array by modifying each element
//accept callback and applies that function to each elements of array that return new array

const nums1 = [1, 2, 3];

const doubled = nums1.map(n => n * 2);

console.log(doubled); // [2, 4, 6]


//🔹 filter() method in JavaScript arrays (deep explanation)

//👉 The filter() method is used to create a NEW array containing only the elements that pass a condition
//
const numbers = [10, 15, 20, 25, 30];

const result1 = numbers.filter(num => num > 15);

console.log(result1);





let studentdata = [
  {
    name: "basit",
    course: "advance"
  },
  {
    name: "ali",
    course: "basic"
  },
  {
    name: "ahmad",
    course: "advance"
  }
];

let advancestudent = studentdata.filter(student => student.course === "advance");

console.log(advancestudent);


















