document.getElementById("add-task-btn").addEventListener("click", addTask);

// Load tasks from localStorage when the page is loaded
window.onload = loadTasks;

function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const taskDate = new Date().toLocaleString();
    const taskId = Date.now();

    const task = {
        id: taskId,
        text: taskText,
        dateAdded: taskDate,
        isCompleted: false
    };

    // Add task to localStorage
    const tasks = getTasksFromLocalStorage();
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    addTaskToList(task);
    taskInput.value = ""; // Clear input after adding
}

function loadTasks() {
    const tasks = getTasksFromLocalStorage();
    tasks.forEach(task => addTaskToList(task));
}

function getTasksFromLocalStorage() {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
}

function addTaskToList(task) {
    const list = task.isCompleted ? document.getElementById("completed-list") : document.getElementById("pending-list");

    const li = document.createElement("li");
    li.id = task.id;

    li.innerHTML = `
        <span class="task-text">${task.text}</span>
        <span class="task-date">${task.dateAdded}</span>
        <div class="task-actions">
            <button onclick="toggleCompletion(${task.id})">${task.isCompleted ? "Undo" : "Complete"}</button>
            <button class="edit-btn" onclick="editTask(${task.id})">Edit</button>
            <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
        </div>
    `;

    list.appendChild(li);
}

function toggleCompletion(taskId) {
    const taskElement = document.getElementById(taskId);
    const taskText = taskElement.querySelector(".task-text").innerText;
    const taskDate = new Date().toLocaleString();

    const tasks = getTasksFromLocalStorage();
    const task = tasks.find(t => t.id === taskId);

    task.isCompleted = !task.isCompleted; // Toggle the completion status

    // Update task data in localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskElement.classList.toggle("completed");

    // Move task to the correct list
    if (task.isCompleted) {
        document.getElementById("completed-list").appendChild(taskElement);
    } else {
        document.getElementById("pending-list").appendChild(taskElement);
    }

    // Update button text and task date
    const completeButton = taskElement.querySelector("button");
    completeButton.innerText = task.isCompleted ? "Undo" : "Complete";

    const taskDateElement = taskElement.querySelector(".task-date");
    taskDateElement.innerText = taskDate;
}

function deleteTask(taskId) {
    const taskElement = document.getElementById(taskId);
    taskElement.remove();

    // Remove task from localStorage
    const tasks = getTasksFromLocalStorage();
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

function editTask(taskId) {
    const taskElement = document.getElementById(taskId);
    const newTaskText = prompt("Edit your task:", taskElement.querySelector(".task-text").innerText);

    if (newTaskText) {
        taskElement.querySelector(".task-text").innerText = newTaskText;

        // Update task in localStorage
        const tasks = getTasksFromLocalStorage();
        const task = tasks.find(t => t.id === taskId);
        task.text = newTaskText;
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}
