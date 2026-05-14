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

