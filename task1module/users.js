
const users = [];

export function addUser(name, email) {
    users.push({ name, email });
}

export function getUsers() {
    return users;
}
