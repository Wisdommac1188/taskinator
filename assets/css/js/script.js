let formEl = document.querySelector("#task-form");
let tasksToDoEl = document.querySelector("#tasks-to-do");

let createTaskHandler = function(event) {
    event.preventDefault();

    listItemsEl = document.createElement("li");
    listItemsEl.className = "task-item";
    listItemsEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemsEl);
  };

  formEl.addEventListener("submit", createTaskHandler);
 
