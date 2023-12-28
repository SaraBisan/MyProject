//incase export default default
import Action from "./classes/Action.js";
import ActionsManager from "./classes/ActionManager.js";
// incase several exports
//import{Action} form "./classes/Action.js";

let salary = new Action("income", "November salary", 10000);
console.log(salary);
let supermarket = new Action("expense", "Supermarket", 600);
console.log(supermarket);

// פונקציה שמוגדרת בתוך מודול ונקראת ע"י קוד הטמל צריכה להיות מקושרת לווינדוו
window.addActionToManager = function () {
    //get date from form

    let descripion = document.getElementById("description").value;


    //create the action object
    let action = new Action(type, descripion, amount);

    //add the action to actionsManager
    manager.addAction(action);
    showActionsInTable();
    //reset the form 
    document.getElementById("description").value = "";

};
window.deleteActionFromManager = function (actionId) {
    if (confirm("Are You Sure?")) {
        manager.deleteAction(actionId);
        showActionsInTable();
    }
}

window.updateActionInManager = function (actionId) {
    let newAmount = prompt("Please Enter new amount: ");
    if (newAmount == null || newAmount == "") alert("Something went wrong");
    else {
        manager.updateAction(actionId, +newAmount);
        showActionsInTable();
    }
};

function showActionsInTable() {
    document.getElementById("actions").innerHTML = "";
    localStorage.setItem("actions", JSON.stringify(manager.actions));
    for (let action of manager.actions) {
        document.getElementById("actions").innerHTML += `<tr class=${action.type == "income" ? "text-success" : "text-danger"} ><td>${action.descripion}</td>
        <td>${action.amount}</td>
        <td><a onclick="updateActionInManager(${action.id})"<i class="fa-regular fa-pen-to-square"></i></a></td>
        <td><a onclick="deleteActionFromManager(${action.id})"><i class="fa-solid fa-trash"></i></a></td></tr>`;
    }
}
let manager = new ActionsManager();
showActionsInTable();