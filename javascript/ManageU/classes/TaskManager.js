export default class TaskManager {
    constructor() {
        this.tasks = localStorage.getItem("tasks")
            ? JSON.parse(localStorage.getItem("tasks"))
            : [];

        this.completeTask();
    }
    addTask(task) {
        this.tasks.push(task);
        this.completeTask();
    }
    deleteTask(taskId) {
        // find the relevent index
        let indexToDelete = this.tasks.findIndex(
            (task) => task.id == taskId
        );
        // delete with splice
        this.tasks.splice(indexToDelete, 1);
        this.completeTask();
    }

    updateTaskDescription(taskId, newTask) {
        //find the relevent index
        let indexToUpdate = this.tasks.findIndex((task) => task.id == taskId);
        //update in the array
        this.tasks[indexToUpdate].description = this.tasks[indexToUpdate].type == "income" ? newTask : -newTask;
        this.completeTask();
    }

    completeTask() {
        if (completed === true) {
            return true;
        }


    }
}

