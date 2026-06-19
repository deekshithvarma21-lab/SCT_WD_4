const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

loadTasks();

function addTask(){

    if(taskInput.value.trim()===""){
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span onclick="toggleTask(this)">
            ${taskInput.value}
        </span>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(li);

    saveTasks();

    taskInput.value="";
}

function toggleTask(element){
    element.classList.toggle("completed");
    saveTasks();
}

function deleteTask(button){
    button.parentElement.remove();
    saveTasks();
}

function saveTasks(){
    localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks(){
    taskList.innerHTML =
        localStorage.getItem("tasks") || "";
}