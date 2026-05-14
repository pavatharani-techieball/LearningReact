//creating arrays

const color=["blue","black","green"];
console.log(color);

//1.push

const color=["blue","black","white"];
color.push("green");
console.log(color);
//[ 'blue', 'black', 'white', 'green' ]

//2.pop

const fruits = ["apple", "banana", "mango"];
fruits.pop();
console.log(fruits);
//["apple", "banana"]

//3.shift

const arr = [10, 20, 30];
 arr.shift();
console.log(arr);
//[ 20, 30 ]

//4.unshift

const a = [3];
a.unshift(1, 2);
console.log(a);
//[ 1, 2, 3 ]

//5.splice

const arr = [1, 2, 3, 4];
arr.splice(1, 2);
console.log(arr);

//add

const arr = [1, 4];
arr.splice(1, 0, 2, 3);
console.log(arr);

//Replace Elements

const arr = ["apple", "banana", "mango"];
arr.splice(1, 1, "orange");
console.log(arr);

//Non-Mutating Methods
//slice()

const arr = [10, 20, 30, 40];
const result = arr.slice(1, 3);
console.log(result);

//negative index

const arr = [10, 20, 30, 40];
console.log(arr.slice(-2));

//concat()

const a = [1];
const b = [2];
const c = [3];
const result = a.concat(b, c);
console.log(result);


//join()

const arr = ["html", "css", "js"];
const result = arr.join("-");
console.log(result);

const arr = ["a", "b", "c"];
console.log(arr.join());

const arr = ["H", "E", "L", "L", "O"];
console.log(arr.join(""));


//Iteration Methods
//forEach()

const fruits = ["apple", "banana", "mango"];
fruits.forEach((fruit, index) => {
  console.log(index, fruit);
});

const fruits = ["apple", "banana", "mango"];
fruits.forEach((fruit, index) => {
  console.log(index, fruit);
});


const nums = [1, 2, 3];
nums.forEach((num, index, arr) => {
  console.log(arr);
});

//map()

const nums = [1, 2, 3];
const doubled = nums.map((num) => {
  return num * 2;
});
console.log(doubled);

const names = ["pava", "diya"];
const upper = names.map((name) => {
  return name.toUpperCase();
});


console.log(upper);
const nums = [1, 2, 3];
const doubled = nums.map(num => num * 2);
console.log(doubled);


//filter()

const nums = [1, 2, 3, 4, 5];
const even = nums.filter((num) => {
  return num % 2 === 0;
});
console.log(even);

//reduce()

const nums = [1, 2, 3, 4];
const total = nums.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(total);

const arr = [1,2,3,4];
const res = arr.reduce((accu, curr) => {
    if (curr > 2) {
        accu.push(curr);
    }
    return accu;
}, []);

console.log(res);

//count occurences

const fruits = ["apple", "banana", "apple"];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count);

//Finding Methods
//find()

const nums = [5, 10, 15];
const result = nums.find((num) => {
  return num > 8;
});
console.log(result);

//findIndex()

const nums = [5, 10, 15];
const index = nums.findIndex((num) => {
  return num > 8;
});
console.log(index);

//includes()

const fruits = ["apple", "banana"];
console.log(fruits.includes("banana"));

//case sensitive

const arr = ["Apple"];
console.log(arr.includes("apple"));

//indexOf()

const fruits = ["apple", "banana", "mango"];
console.log(fruits.indexOf("banana"));

//Sorting Methods
//sort()

const arr = [3, 1, 2];
arr.sort();
console.log(arr);

//ascending

const arr = [100, 2, 20];
arr.sort((a, b) => {
  return a - b;
});
console.log(arr);

//descending

const arr = [5, 1, 9];
arr.sort((a, b) => b - a);
console.log(arr);

//reverse()

const arr = [1, 2, 3];
arr.reverse();
console.log(arr);

//Array Spread Operator
//copy

const nums = [1, 2, 3];
console.log(...nums);

//merge
const a = [1, 2];
const b = [3, 4];
const result = [...a, ...b];
console.log(result);

const nums = [1, 2, 3];
function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(...nums));

//Destructuring Arrays

const colors = ["red", "green", "blue"];
const [first, second, third] = colors;
console.log(first);
console.log(second);
console.log(third);

//default values

const nums = [10];
const [a, b = 50] = nums;
console.log(a);
console.log(b);

