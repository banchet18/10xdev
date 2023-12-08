var name1 = "chetan"; // name is variable
var age = 20;
var users = ["harkirat", "raman", "samar"]; // array of name
var users1 = {
  name: "harkirat",
  age: 20,
};
console.log(name1);
console.log(age);
console.log(users);
console.log(users1);

//for loop
var usersNames = ["harkirat", "raman", "chetan", "rahul", "teju"];

for (var i = 0; i < usersNames.length; i++) {
  console.log(usersNames[i]);
}

//array of objects

var users2 = [
  { name: "harkirat", age: 20 },
  { name: "raman", age: 25 },
];

console.log(users2[0].age);

for (var i = 0; i < users2.length; i++) {
  console.log(users2[i].name + "age is " + users2[i].age);
}
