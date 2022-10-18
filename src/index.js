import './style.css';
import * as todoList from './modules/todoList.js';
import * as display from './modules/displayController.js'


function todoApp() {
    display.loadOnStart();

    let currentProject = null;
    const newTaskButton = document.getElementsByClassName('new-task-button')[0];
    const closeTaskModal = document.getElementsByClassName('close')[0];

    /* const createTaskForm = document.getElementById('create-task');

    createTaskForm.addEventListener('submit', createTask); */

    newTaskButton.addEventListener('click', display.showModalForTask);
    closeTaskModal.addEventListener('click', display.closeAndClearModalForTask);

    function createTask(e) {
        e.preventDefault();
        console.log(e.target[2].value);
        let title = e.target[0].value;
        let dueDate = e.target[1].value;
        let priority = e.target[2].value;
        let description = e.target[3].value;
        todoList.createTask(title, dueDate, priority, description);
    }
}


todoApp();
