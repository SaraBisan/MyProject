//incase export default default
import Task from "./classes/Task.js";
import TaskManager from "./classes/TaskManager.js";
// incase several exports
//import{Action} form "./classes/Action.js";

let salary = new Task("income", "November salary", 10000);
console.log(salary);
let supermarket = new Task("expense", "Supermarket", 600);
console.log(supermarket);

// פונקציה שמוגדרת בתוך מודול ונקראת ע"י קוד הטמל צריכה להיות מקושרת לווינדוו
window.addTaskToManager = function () {
    //get date from form
    let descripion = document.getElementById("description").value;

    //create the action object
    let task = new Task(descripion);

    //add the action to actionsManager
    manager.addTask(task);
    showTasksInTable();
    //reset the form 
    document.getElementById("description").value = "";

};
window.deleteTaskFromManager = function (taskId) {
    if (confirm("Are You Sure?")) {
        manager.deleteTask(taskId);
        showTasksInTable();
    }
}

window.updateTasksInManager = function (taskId) {
    let newTask = prompt("Please Enter new description: ");
    if (newTask == null || newTask == "") alert("Something went wrong");
    else {
        manager.updateTaskDescription(taskId, +newTask);
        showTasksInTable();
    }
};

window.checkTaskInManager = function (taskId) {
    if (confirm("Are You Sure To Check?")) {
        manager.completeTask(taskId);
        showTasksInTable();
    }

}

function showTasksInTable() {
    document.getElementById("tasks").innerHTML = "";
    localStorage.setItem("tasks", JSON.stringify(manager.tasks));
    for (let task of manager.tasks) {
        document.getElementById("tasks").innerHTML += `<tr class=${task.type == "income" ? "text-success" : "text-danger"} ><td>${task.descripion}</td>
        <td><a onclick="checkTaskInManager(${task.id})" <i class="fa-solid fa-check"></i></a></td>
        <td><a onclick="updateTasksInManager(${task.id})"<i class="fa-regular fa-pen-to-square"></i></a></td>
        <td><a onclick="deleteTaskFromManager(${task.id})"><i class="fa-solid fa-trash"></i></a></td></tr>`;
    }
}
let manager = new TaskManager();
showTasksInTable();