let buttonEl = document.querySelector("#save-task");
let tasksToDoEl = document.querySelector("#tasks-to-do");

let createTaskHandler = function() {
    listItemsEl = document.createElement("li");
    listItemsEl.className = "task-item";
    listItemsEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemsEl);
  }

  buttonEl.addEventListener("click", createTaskHandler);
 
