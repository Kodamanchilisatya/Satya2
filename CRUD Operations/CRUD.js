
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const taskList = document.getElementById('taskList');
const titleInput = document.getElementById('title');
const addTaskBtn = document.getElementById('addTaskBtn');


function renderTasks() {
    taskList.innerHTML = '<h2>Your Tasks</h2>'; 
    tasks.forEach((task, index) => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        taskDiv.innerHTML = `
            <div>
                <div class="task-title">${task.title}</div>
            </div>
            <div class="actions">
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
        taskList.appendChild(taskDiv);
    });
}


addTaskBtn.addEventListener('click', () => {
    const title = titleInput.value.trim();
    if (title) {
        tasks.push({ title });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
        titleInput.value = '';
    } 
    else {
        alert('Please fill in fields.');
    }
});


function editTask(index) {
    const task = tasks[index];
    const newTitle = prompt('Edit Task Title', task.title);
    if (newTitle) {
        tasks[index] = { title: newTitle };
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    }
}


function deleteTask(index) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    }
}

renderTasks();
