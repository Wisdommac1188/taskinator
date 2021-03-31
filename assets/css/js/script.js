let formEl = document.querySelector("#task-form");
let tasksToDoEl = document.querySelector("#tasks-to-do");

let createTaskHandler = function(event) {
    event.preventDefault();
    let taskNameInput = document.querySelector("input[name='task-name']").value;
    let taskTypeInput = document.querySelector("select[name='task-type']").value;
   
    listItemsEl = document.createElement("li");
    listItemsEl.className = "task-item";
    
    let taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";

    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

    listItemsEl.appendChild(taskInfoEl);
    tasksToDoEl.appendChild(listItemsEl);
  };

  formEl.addEventListener("submit", createTaskHandler);
 
