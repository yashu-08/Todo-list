let tasks = [];

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = task.completed ? "completed" : "";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.onclick = () => toggleComplete(index);

        const text = document.createElement("span");
        text.innerText = `${task.name} - ${task.dateTime}`;

        const editButton = document.createElement("button");
        editButton.innerText = "✎";
        editButton.className = "edit";
        editButton.onclick = () => editTask(index);

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "✖";
        deleteButton.className = "delete";
        deleteButton.onclick = () => deleteTask(index);

        li.appendChild(checkbox);
        li.appendChild(text);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskDateTimeInput = document.getElementById("taskDateTime");
    const taskName = taskInput.value.trim();
    const taskDateTime = taskDateTimeInput.value;
    if (taskName && taskDateTime) {
        tasks.push({ name: taskName, dateTime: taskDateTime, completed: false });
        taskInput.value = "";
        taskDateTimeInput.value = "";
        renderTasks();
    }
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function editTask(index) {
    const newName = prompt("Edit task:", tasks[index].name);
    const newDateTime = prompt("Edit date & time:", tasks[index].dateTime);
    if (newName && newDateTime) {
        tasks[index].name = newName.trim();
        tasks[index].dateTime = newDateTime;
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function removeCompleted() {
    tasks = tasks.filter(task => !task.completed);
    renderTasks();
}