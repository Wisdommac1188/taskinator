let formEl = document.querySelector("#task-form");
let tasksToDoEl = document.querySelector("#tasks-to-do");

let taskFormHandler = function(event) {
    event.preventDefault();
    let taskNameInput = document.querySelector("input[name='task-name']").value;
    let taskTypeInput = document.querySelector("select[name='task-type']").value;
   
    listItemsEl = document.createElement("li");
    listItemsEl.className = "task-item";
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!")
        return false;
    }

    formEl.reset();

    
    let taskDataObj = {
        name:taskNameInput,
        type:taskTypeInput
    }
        
    

    createTaskEl(taskDataObj);
  };

let createTaskEl = function(taskDataObj) {
    let taskNameInput = document.querySelector("input[name='task-name']").value;
    let taskTypeInput = document.querySelector("select[name='task-type']").value;
   
    listItemsEl = document.createElement("li");
    listItemsEl.className = "task-item";
    
    let taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

    listItemsEl.appendChild(taskInfoEl);
    tasksToDoEl.appendChild(listItemsEl);
};

  formEl.addEventListener("submit", taskFormHandler);
 
