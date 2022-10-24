import './style.css';
import * as todoList from './modules/todoList';
import * as display from './modules/displayController'


function todoApp() {
    display.loadOnStart();
    let currentView = 'all';
    let currentProject = null;

    onUpdate();

    const newTaskButton = document.getElementsByClassName('new-task-button')[0];
    const closeTaskModal = document.getElementsByClassName('close')[0];
    const newProjectButton = document.getElementsByClassName('new-project-button')[0];
    const closeProjectModal = document.getElementsByClassName('close')[1];
    const projectForm = document.getElementById('create-project');
    const taskForm = document.getElementById('create-task');
    const viewTasksButtons = [...document.getElementsByClassName('view-tasks')];


    newTaskButton.addEventListener('click', display.showModalForTask);
    closeTaskModal.addEventListener('click', display.closeAndClearModalForTask);
    newProjectButton.addEventListener('click', display.showModalForProject);
    closeProjectModal.addEventListener('click', display.closeAndClearModalForProject);
    projectForm.addEventListener('submit', createProject);
    taskForm.addEventListener('submit', submitTaskFormHandler);
    viewTasksButtons.forEach(button => button.addEventListener('click', viewTasksHandler))

    function onUpdate() {   
        let projects = todoList.getProjects();
        display.displayProjects(projects, currentProject);
        let tasks = todoList.getTasks(currentView, currentProject);
        display.displayTasks(tasks);

        const completeTaskCheckboxes = [...document.getElementsByClassName('complete-task-checkbox')];
        const openDetailsButtons = [...document.getElementsByClassName('open-details-button')];
        const editTaskButtons = [...document.getElementsByClassName('edit-task-button')];
        const deleteTaskButtons = [...document.getElementsByClassName('delete-task-button')];
        const showProjectButtons = [...document.getElementsByClassName('project')];
        const deleteProjectIcons = [...document.getElementsByClassName('delete-icon')];
        completeTaskCheckboxes.forEach(checkbox => checkbox.addEventListener('click', completeTaskCheckboxHandler));
        openDetailsButtons.forEach(button => { button.addEventListener('click', showDetailsButtonHandler) });
        editTaskButtons.forEach(button => { button.addEventListener('click', editTaskButtonHandler) });
        deleteTaskButtons.forEach(button => { button.addEventListener('click', deleteTaskButtonHandler) });
        showProjectButtons.forEach(button => button.addEventListener('click', showTaskByProjectHandler));
        deleteProjectIcons.forEach(deleteIcon => deleteIcon.addEventListener('click', deleteProjectHandler));
    }


    function submitTaskFormHandler(e) {
        e.preventDefault();
        const title = e.target[0].value;
        const dueDate = e.target[1].value;
        const priority = e.target[2].value;
        const projectName = e.target[3].value;
        const description = e.target[4].value;
        if (e.target.dataset.id) {
            const id = e.target.dataset.id;
            todoList.updateTask(id, { title, dueDate, priority, description,projectName});
        } else {
            todoList.addTask(title, dueDate, priority, description, projectName);
        }
        display.closeAndClearModalForTask();
        onUpdate();
    }

    function createProject(e) {
        e.preventDefault();
        let projectName = document.getElementById('add-project').value;
        todoList.addProject(projectName);
        display.closeAndClearModalForProject();
        onUpdate();
    }

    function deleteProjectHandler(e) {
        e.stopPropagation();
        let projectToDelete = e.composedPath()[1].dataset.name;
        todoList.deleteProject(projectToDelete);
        currentView = 'all';
        currentProject = null;
        display.toggleActiveClass();
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
        currentProject = null;
        display.toggleActiveClass(this);
        onUpdate();
    }

    function showTaskByProjectHandler(e) {
        currentProject = e.target.dataset.name;
        currentView = 'project';
        onUpdate();
    }
}


todoApp();
