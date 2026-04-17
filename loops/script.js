//looping
for (let i = 1; i <= 5; i++) {
  console.log("For Loop:", i);
}

let i = 1;

while (i <= 5) {
  console.log("While Loop:", i);
  i++;
}

let j = 1;

do {
  console.log("Do While Loop:", j);
  j++;
} while (j <= 5);


let numbers = [10, 20, 30];

for (let value of numbers) {
  console.log("for...of:", value);
}


let person = { name: "Rahim", age: 25 };

for (let key in person) {
  console.log("for...in:", key, person[key]);
}


let fruits = ["apple", "banana", "mango"];

fruits.forEach(function(item, index) {
  console.log("forEach:", index, item);
});



let nums = [1, 2, 3];

let doubled = nums.map(n => n * 2);

console.log("map:", doubled);




let arr = [1, 2, 3, 4, 5];

let even = arr.filter(n => n % 2 === 0);

console.log("filter:", even);



let numbers2 = [1, 2, 3, 4];

let sum = numbers2.reduce((acc, curr) => acc + curr, 0);

console.log("reduce:", sum);



