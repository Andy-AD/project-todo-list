import './style.css';
import * as todoList from './modules/todoList.js';
import * as display from './modules/displayController.js'


function todoApp() {
    display.loadOnStart();
    let currentView = 'all';
    let currentProject = null;

    onUpdate();

    const newTaskButton = document.getElementsByClassName('new-task-button')[0];
    const closeTaskModal = document.getElementsByClassName('close')[0];
    const newProjectButton = document.getElementsByClassName('new-project-button')[0];
    const closeProjectModal = document.getElementsByClassName('close')[1];
    const submitProjectButton = document.getElementById('submit-project');
    const taskForm = document.getElementById('create-task');
    const viewTasksButtons = [...document.getElementsByClassName('view-tasks')];


    newTaskButton.addEventListener('click', display.showModalForTask);
    closeTaskModal.addEventListener('click', display.closeAndClearModalForTask);
    newProjectButton.addEventListener('click', display.showModalForProject);
    closeProjectModal.addEventListener('click', display.closeAndClearModalForProject);
    submitProjectButton.addEventListener('click', createProject);
    taskForm.addEventListener('submit', submitTaskFormHandler);
    viewTasksButtons.forEach(button => button.addEventListener('click', viewTasksHandler)) 

    function onUpdate() {
        let projects = todoList.getProjects();
        display.displayProjects(projects);
        let tasks = todoList.getTasks(currentView);
        display.displayTasks(tasks);

        const completeTaskCheckboxes = [...document.getElementsByClassName('complete-task-checkbox')];
        const openDetailsButtons = [...document.getElementsByClassName('open-details-button')];
        const editTaskButtons = [...document.getElementsByClassName('edit-task-button')];
        const deleteTaskButtons = [...document.getElementsByClassName('delete-task-button')];
        completeTaskCheckboxes.forEach(checkbox => checkbox.addEventListener('click', completeTaskCheckboxHandler));
        openDetailsButtons.forEach(button => { button.addEventListener('click', showDetailsButtonHandler) });
        editTaskButtons.forEach(button => { button.addEventListener('click', editTaskButtonHandler) });
        deleteTaskButtons.forEach(button => { button.addEventListener('click', deleteTaskButtonHandler) });
    }


    function submitTaskFormHandler(e) {
        e.preventDefault();
        let title = e.target[0].value;
        let dueDate = e.target[1].value;
        let priority = e.target[2].value;
        let description = e.target[3].value;
        if (e.target.dataset.id) {
            const id = e.target.dataset.id;
            todoList.updateTask(id, {title, dueDate, priority, description});
        } else {
            todoList.addTask(title, dueDate, priority, description, currentProject);
        }
        display.closeAndClearModalForTask();
        onUpdate();
    }

    function createProject() {
        let projectName = document.getElementById('add-project').value;
        todoList.addProject(projectName);
        display.closeAndClearModalForProject();
        onUpdate();
    }

    function showDetailsButtonHandler(e) {
        let id = e.composedPath()[2].id;
        display.showAndHideDetails(id);
    }

    function deleteTaskButtonHandler(e) {
        let id = e.composedPath()[2].id;
        todoList.deleteTask(id);
        onUpdate();
    }

    function editTaskButtonHandler(e) {
        let id = e.composedPath()[2].id;
        let task = todoList.getOneTask(id);
        display.showModalForEditTask(task);
    }

    function completeTaskCheckboxHandler(e) {
        const id = e.composedPath()[2].id;
        if (e.target.checked) {
            todoList.completeTask(id);
        } else {
            todoList.undoCompleteTask(id);
        }
        onUpdate();
    }

    function viewTasksHandler(e) {
        currentView = e.target.dataset.viewTasks;
        const lastActive = document.getElementsByClassName('active')[0];
        lastActive.classList.toggle('active');
        this.classList.toggle('active');
        onUpdate();
    }
}


todoApp();
