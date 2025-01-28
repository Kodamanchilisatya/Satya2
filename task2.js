let  name="Sam";
let  age=20;
let isStudent1= true;
let favoritColor;
let futurePlans=null;

//Arithmatic operaters

let randNo=Math.floor(Math.random()*100);
let sum=age + randNo;
let diff=age - 18;
let prod=age * 2;
let div=age / 5;

//comparison operators
let ageCheck1=age>18;
let ageCheck2= age===randNo;
let nameCheck= name==="john";

//Logical operators
let andOpe=age>18 && isStudent1;
let orOpe=age<18 || !isStudent1;

console.log("Name is:", name);
console.log("Age is:", age);
console.log("Student:", isStudent1);
console.log("Color is:", favoritColor);
console.log("Future plan is:", futurePlans);
console.log("Sum is:", sum);
console.log("difference is:", diff);
console.log("product is:", prod);
console.log("division  is:", div);
console.log("Age greater than 18?:", ageCheck1);
console.log("Age equal to randome no?:", ageCheck2);
console.log("Name equal to john?:", nameCheck);
console.log("Age greater than 18 And Student?:", andOpe);
console.log("Age less than 18 or not Student?:", orOpe);
console.log(typeof(name));





