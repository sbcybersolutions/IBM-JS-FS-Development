const taskInput = document.getElementById("taskInput");

const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

let tasks = [];

// Create Add Task function
function addTask() {
            const taskText = taskInput.value.trim();
            if (taskText !== "") {
                tasks.push({ text: taskText});
                taskInput.value = "";
                displayTasks();
            }
        }

// Create Display Task function
function displayTasks() {
            taskList.innerHTML = "";
            tasks.forEach((task, index) => {
                const li = document.createElement("li");
                li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
                    <label for="task-${index}">${task.text}</label>`;
                li.querySelector("input").addEventListener("change", () => toggleTask(index));
                taskList.appendChild(li);
            });
        }

// Create toggleTask function
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
        }

// Create clear Completed Task function
function clearCompletedTasks() {
        tasks = tasks.filter(task => !task.completed);
        displayTasks();
    }

addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);

 displayTasks();