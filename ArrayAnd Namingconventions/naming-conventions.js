// Constants - UPPER_SNAKE_CASE
const MAX_ATTEMPTS = 5;
const API_BASE_URL = "https://api.example.com";

// Variables - camelCase
let userName = "John Doe";
let isLoggedIn = false;

// Function - camelCase
function fetchUserData(userId) {
    return `${API_BASE_URL}/users/${userId}`;
}

// Class - PascalCase
class Product {
    constructor(name, price) {
        this.name = name; // camelCase for property
        this.price = price;
    }

    displayInfo() {
        console.log(`${this.name} costs $${this.price}`);
    }
}

// Object - camelCase
const product = new Product("Laptop", 1200);
product.displayInfo();

// Array - camelCase
const userScores = [98, 87, 93];

// Private variables (ES6 classes) - has a prefix of # before the variable name
class User {
    #password;

    constructor(password) {
        this.#password = password;
    }

    getPassword() {
        return this.#password;
    }
}




// For file names we have to use kebab-case. For ex: main-js-file.js