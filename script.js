document.getElementById('add-task').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText) {
        const taskList = document.getElementById('task-list');

        const listItem = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        listItem.appendChild(taskSpan);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'edit';
        editButton.addEventListener('click', editTask);
        listItem.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';
        deleteButton.addEventListener('click', deleteTask);
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);

        taskInput.value = '';
    }
}

function editTask(event) {
    const listItem = event.target.parentNode;
    const taskSpan = listItem.querySelector('span');
    const newTaskText = prompt('Edit the task', taskSpan.textContent);
    if (newTaskText !== null) {
        taskSpan.textContent = newTaskText;
    }
}

function deleteTask(event) {
    const listItem = event.target.parentNode;
    listItem.remove();
}