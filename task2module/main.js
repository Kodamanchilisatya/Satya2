import { add, subtract, multiply, divide } from './calculator.js';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function startCalculator() {
    rl.question("Enter first number: ", (num1) => {
        rl.question("Enter second number: ", (num2) => {
            rl.question("Choose operation (+, -, *, /): ", (operation) => {
                num1 = parseFloat(num1);
                num2 = parseFloat(num2);

                if (isNaN(num1) || isNaN(num2)) 
                {
                    console.log("Error: Please enter valid numbers.");
                    rl.close();
                    return;
                }
                let result;

                switch (operation)
                {
                    case '+':
                        result = add(num1, num2);
                        break;
                    case '-':
                        result = subtract(num1, num2);
                        break;
                    case '*':
                        result = multiply(num1, num2);
                        break;
                    case '/':
                        result = divide(num1, num2);
                        break;
                    default:
                        result = "Invalid operation!";
                }
                console.log(`Result: ${result}`);
                rl.close();
            });
        });
    });
}
startCalculator();
