
let fruits = ["apple", "banana"];
fruits.push("cherry");
console.log(fruits);


let last = fruits.pop();
console.log(last); 
console.log(fruits); 


fruits.unshift("cherry");
console.log(fruits); 


let first = fruits.shift();
console.log(first); 
console.log(fruits); 


let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2);
console.log(combined); 


let sliced = fruits.slice(0, 1);
console.log(sliced);


fruits.splice(1, 1, "grape");
console.log(fruits); 


let numbers = [1, 2, 3, 2];
console.log(numbers.indexOf(2)); 


console.log(numbers.lastIndexOf(2)); 


console.log(fruits.includes("apple")); 


numbers.forEach(num => console.log(num * 2)); 


let squared = numbers.map(num => num * num);
console.log(squared); 


let even = numbers.filter(num => num % 2 === 0);
console.log(even); 


let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); 


let found = numbers.find(num => num > 2);
console.log(found); 

let index = numbers.findIndex(num => num > 2);
console.log(index); 


numbers.sort((a, b) => a - b); 
console.log(numbers);


numbers.reverse();
console.log(numbers); 


console.log(numbers.every(num => num > 0)); 


console.log(numbers.some(num => num > 2)); 


console.log(fruits.join(", ")); 


let nested = [1, [2, 3], [4, [5]]];
console.log(nested.flat(2)); 


let doubled = numbers.flatMap(num => [num, num * 2]);
console.log(doubled); 


numbers.fill(0);
console.log(numbers); 