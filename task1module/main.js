
import { addUser, getUsers } from './users.js';
import readline from 'readline';


// create input interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askUser() 
{
    rl.question("Enter user name (or type 'exit' to stop): ", (name) => {
        if (name.toLowerCase() === 'exit') {
            console.log("User List:", getUsers());
            rl.close();
            return;
        }
        rl.question("Enter user email: ", (email) => {
            addUser(name, email);
            askUser();
        });
    });
}

askUser();
