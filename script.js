document.addEventListener('DOMContentLoaded', function(){

const addButton = document.getElementById('add-task-btn');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');

function addTask(){
    let taskTest = taskInput.value.trim();

    if (taskTest === ""){
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskTest;

    const removeButton = document.createElement('button');  // Create a "Remove" button
    removeButton.textContent = "Remove";
    removeButton.className = 'remove-btn';

    removeButton.onclick = function(){   // Assign onclick event to remove the task (li) from the taskList
        taskList.removeChild(li);
    }

    li.appendChild(removeButton);  // Append the remove button to the li element

    taskList.appendChild(li);    // Append the li to the task list

    taskInput.value = "";   // Clear the input field after adding the task
}

addButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(enter){
    if (event.key === 'Enter') {
        addTask();
    }
})

addTask();

});