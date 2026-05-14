//craeting objects

const user = {
  name: "Pava",       
  age: 22,            
  isStudent: true,    
  skills: ["HTML", "CSS", "JS"], 
};
console.log(user);

// {
//   name: 'Pava',
//   age: 22,
//   isStudent: true,
//   skills: [ 'HTML', 'CSS', 'JS' ]
// }

//Object with Function 
const user1 = {
  name: "Pava",
  greet: function () {
    console.log("Hello");
  }
};
user1.greet();
//Hello

//accessing properties

//1.Dot

   const user2={
    name:"pava"
   };
   console.log(user2.name);
   //pava

//2.Brackets[]

const user3={
    name:"pava"
   };
   console.log(user3["name"]);
   //pava

//Accesing variables

const demo={
    name:"diya"
};
let keys="name";
console.log(demo[keys]);
//diya

//Adding

const d1={
    name:"diya"
};
d1.age=22;
console.log(d1);

//updating

const d2={
    name:"diya",
    age:23
};
d2["name"]="riya";
console.log(d2);

//delete

const d3={
    name:"diya",
    age:22
};
delete d3.age;
console.log(d3);

//checking properties

const d4={
    name:"diya",
    age:22
};
console.log("name" in d4);
console.log("age" in d4);
console.log("city" in d4);

//object destructuring

const d5 = {
  name: "diya",
  age: 22,
  city: "Chennai"
};
const {name,age,city}=d5;
console.log(name);
console.log(age);
console.log(city);

//rename

const d6 = {
  name: "diya"
};
const { name: username } = d6;
console.log(username);

//default parameters

const d7 = {
  name: "Pava"
};
const { email="pava@gmail.com" } = d7;
console.log(email);

//spread operator
//copy

const d8 = {
  name: "Pava",
  age: 22
};
const copyUser = { ...d8 };
console.log(copyUser);

//merge

const d9={
    city:"TVR"
};
const merge={...d8,...d9};
console.log(merge);

//update

const d10={
    name:"diya"
};
const copy={...d10,name:"riya"};
console.log(copy);


//Javascript Methods
//1.object.keys

const u1 = {
  name: "Pava",
  age: 22,
  city: "Chennai"
};

console.log(Object.keys(u1));

//2.object.values

const u2 = {
  name: "Pava",
  age: 22,
  city: "Chennai"
};

console.log(Object.values(u2));

//3.object.entries

const u3 = {
  name: "Pava",
  age: 22,
  city: "Chennai"
};
console.log(Object.entries(u3));

//object.assign()
//copy

const u4 = {
  name: "Pava",
  age: 22
};
const copyu4 = Object.assign({}, u4);
console.log(copyu4);

//merge

const u5={
    city:"tvr"
};
const copyu5=Object.assign({},u4,u5);
console.log(copyu5);

//update

const u6={
    name:"diya"
};
const update=Object.assign({},u6,{email:"diya@gmail.com"});
console.log(update);


//for in loop

const u7={
    name:"diya",
    age:22,
    city:"tvr"
};
for(let key in u7){
    console.log(key,u7[key])
};

//nested objects

const u8 = {
  name: "Pava",
  address: {
    city: "Chennai",
    pincode: 600001
  }
};
console.log(u8.address.city);

//array of object

const users = [
  {
    id: 1,
    name: "pava"
  },
  {
    id: 2,
    name: "diya"
  }
];
console.log(users[1].name);

//adding in array of obj

users.unshift({
    id:3,
    name:"riya"
});

//update
users[1].name="priya";


//delete
users.splice(1,1);
// const up=users.filter((res=> res.id !==2));
//const up=users.find((res)=>res.id===2);
//const up=users.filter((res)=>res.id>1);
console.log(users);

//remove duplicates

const arr = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Alice" }
];
const unique=arr.filter((item,index,array)=>
    index===array.findIndex(obj=>
        obj.id===item.id
    )
);
console.log(unique);

//object.create
const use = {
  greet() {
    console.log("Hello");
  }
};
const obj = Object.create(use);

obj.greet();

//Object.defineProperties()

const userobj = {};
Object.defineProperties(userobj, {
  name: {
    value: "Pava",
    writable: true,
    enumerable: true,
    configurable: true
  },
 age: {
    value: 22,
    writable: true,
    enumerable: true,
    configurable: true
  }
});
console.log(userobj);

//Object.freeze()
const p1 = {
  name: "Pava",
  age: 22
};

Object.freeze(p1);
user.name = "diya";
console.log(p1);

//Object.fromEntries()
const p2 = [
  ["name", "Pava"],
  ["age", 22]
];
const obj1 = Object.fromEntries(p2);
console.log(obj1);

//object.entries
const p3 = {
  name: "Pava",
  age: 22
};
const entries = Object.entries(p3);
console.log(entries);

//Object.groupBy()

const p4 = [
  { name: "Pava", age: 22 },
  { name: "Diya", age: 17 },
  { name: "riya", age: 25 }
];
const grouped = Object.groupBy(p4, user =>
  user.age >= 18 ? "adult" : "minor"
);
console.log(grouped);

//Object.hasOwn()

const p5 = {
  name: "Pava",
  age: 22
};

console.log(
  Object.hasOwn(p5, "name")
);

//Object.seal()

const p6 = {
  name: "Pava",
  age: 22
};

Object.seal(p6);
user.name = "diya";
console.log(p6);

//Object.is()

console.log(+0 === -0);

//Object.isFrozen()

const p7 = {
  name: "Pava"
};
Object.freeze(p7);
console.log(
  Object.isFrozen(p7)
);
