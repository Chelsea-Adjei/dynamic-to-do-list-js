document.addEventListener('DOMContentLoaded', function(){

    function loadTasks(){
     const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
     storedTasks.forEach(taskText => addTask(taskText, false)); // false == (not to save again local to lacal storage)

        function addTask(taskText, save = true){  // task creation logic remains the same
            if (save) {
                const storedTasks =JSON.parse(localStorage.getItem('tasks') || '[]');

                storedTasks.push(taskText);
                localStorage.setItem('tasks', JSON.stringify(storedTasks));
            }
        }
    }

    document.addEventListener('DOMContentLoaded', () => { loadTasks(); });


const addButton = document.getElementById('add-task-btn');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');

function addTask(){
    const taskText = taskInput.value.trim();

    if (taskText === ""){
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const removeButton = document.createElement('button');  // Create a "Remove" button
    removeButton.textContent = 'Remove';
    removeButton.classList.add = 'remove-btn';

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