import { add } from "date-fns";

const mainContent = document.getElementById('content');


function loadOnStart() {
    const sidebarDiv = document.createElement('div');
    sidebarDiv.classList.add('sidebar');

    const div1 = document.createElement('div');
    const sidebarTasksHeader = document.createElement('h2')
    sidebarTasksHeader.textContent = 'Tasks';
    const sidebarTaskList = document.createElement('ul');
    const sidebarTaskListItem1 = document.createElement('li');
    sidebarTaskListItem1.classList.add('all-task');
    sidebarTaskListItem1.classList.add('active');
    sidebarTaskListItem1.textContent = 'All';
    const sidebarTaskListItem2 = document.createElement('li');
    sidebarTaskListItem2.classList.add('today-task');
    sidebarTaskListItem2.textContent = 'Today';
    const sidebarTaskListItem3 = document.createElement('li');
    sidebarTaskListItem3.classList.add('week-task');
    sidebarTaskListItem3.textContent = 'This week';
    sidebarTaskList.appendChild(sidebarTaskListItem1);
    sidebarTaskList.appendChild(sidebarTaskListItem2);
    sidebarTaskList.appendChild(sidebarTaskListItem3);
    div1.appendChild(sidebarTasksHeader);
    div1.appendChild(sidebarTaskList);

    const div2 = document.createElement('div');
    const sidebarProjectsHeader = document.createElement('h2')
    sidebarProjectsHeader.textContent = 'Projects';
    const sidebarProjectsList = document.createElement('ul');
    sidebarProjectsList.setAttribute('id', 'projects');

    div2.appendChild(sidebarProjectsHeader);
    div2.appendChild(sidebarProjectsList);

    sidebarDiv.appendChild(div1);
    sidebarDiv.appendChild(div2);

    const addTaskBarDiv = document.createElement('div');
    addTaskBarDiv.classList.add('add-task-bar');
    const addTaskButton = document.createElement('button');
    addTaskButton.classList.add('new-task-button');
    const plusIcon = document.createElement('img');
    plusIcon.setAttribute('src', "../src/icons/plus-circle-outline.svg");
    plusIcon.style = 'width:24px;height:24px';
    addTaskButton.appendChild(plusIcon);
    addTaskButton.textContent = 'New task';
    const addProjectButton = document.createElement('button');
    addProjectButton.classList.add('new-project-button');
    addProjectButton.appendChild(plusIcon);
    addProjectButton.textContent = 'New project';
    addTaskBarDiv.appendChild(addTaskButton);
    addTaskBarDiv.appendChild(addProjectButton);

    const taskContainerDiv = document.createElement('div');
    taskContainerDiv.classList.add('task-container');

    const modalForAddTask = document.createElement('div');
    modalForAddTask.classList.add('modal-task');

    const addTaskDiv = document.createElement('div');
    addTaskDiv.classList.add('add-task');
    const closeSpan = document.createElement('span');
    closeSpan.classList.add('close');
    closeSpan.textContent = 'x';
    const modalTaskHeader = document.createElement('h2');
    modalTaskHeader.textContent = 'Add new task';
    const createTaskForm = document.createElement('form');
    createTaskForm.setAttribute('id', 'create-task');
    createTaskForm.setAttribute('action', 'post');
    createTaskForm.setAttribute('method', 'post');
    const labelForTitle = document.createElement('label');
    labelForTitle.setAttribute('for', 'add-title');
    labelForTitle.textContent = 'Title:';
    const inputTitle = document.createElement('input');
    inputTitle.setAttribute('type', 'text');
    inputTitle.setAttribute('id', 'add-title');
    inputTitle.setAttribute('required', '');
    inputTitle.setAttribute('name', 'title');
    const labelForDueDate = document.createElement('label');
    labelForDueDate.textContent = 'Due date:';
    labelForDueDate.setAttribute('for', 'due-date');
    const inputDueDate = document.createElement('input');
    inputDueDate.setAttribute('type', 'date');
    inputDueDate.setAttribute('name', 'due-date');
    inputDueDate.setAttribute('id', 'due-date');
    inputDueDate.setAttribute('required', '');
    const labelForPriority = document.createElement('label');
    labelForPriority.setAttribute('for', 'priority');
    labelForPriority.textContent = 'Priority:';
    const selectPriority = document.createElement('select');
    selectPriority.setAttribute('name', 'priority');
    selectPriority.setAttribute('id', 'priority');
    const optionLowPriority = document.createElement('option');
    optionLowPriority.setAttribute('value', 'low');
    optionLowPriority.textContent = 'Low';
    optionLowPriority.setAttribute('selected', '');
    const optionMediumPriority = document.createElement('option');
    optionMediumPriority.setAttribute('value', 'medium');
    optionMediumPriority.textContent = 'Medium';
    const optionHighPriority = document.createElement('option');
    optionHighPriority.setAttribute('value', 'high');
    optionHighPriority.textContent = 'High';
    selectPriority.appendChild(optionLowPriority);
    selectPriority.appendChild(optionMediumPriority);
    selectPriority.appendChild(optionHighPriority);
    const labelForDescription = document.createElement('label');
    labelForDescription.setAttribute('for', 'description');
    labelForDescription.textContent = 'Description:'
    const textArea = document.createElement('textarea');
    textArea.setAttribute('name', 'description');
    textArea.setAttribute('id', 'description');
    textArea.setAttribute('cols', '30');
    textArea.setAttribute('rows', '5');
    const submitFormButton = document.createElement('button');
    submitFormButton.textContent = 'Add Task';
    submitFormButton.setAttribute('id', 'submit');
    createTaskForm.appendChild(labelForTitle);
    createTaskForm.appendChild(inputTitle);
    createTaskForm.appendChild(labelForDueDate);
    createTaskForm.appendChild(inputDueDate);
    createTaskForm.appendChild(labelForPriority);
    createTaskForm.appendChild(selectPriority);
    createTaskForm.appendChild(labelForDescription);
    createTaskForm.appendChild(textArea);
    createTaskForm.appendChild(submitFormButton);
    addTaskDiv.appendChild(closeSpan);
    addTaskDiv.appendChild(modalTaskHeader);
    addTaskDiv.appendChild(createTaskForm);
    modalForAddTask.appendChild(addTaskDiv);

    const modalForAddProject = document.createElement('div');
    modalForAddProject.classList.add('modal-project')
    const addProjectDiv = document.createElement('div');
    addProjectDiv.classList.add('add-project');
    const addProjectHeader = document.createElement('h2');
    addProjectHeader.textContent = 'Add Project:';
    const closeProjectSpan = document.createElement('span');
    closeProjectSpan.classList.add('close');
    closeProjectSpan.textContent = 'x';
    const inputForProjectTitle = document.createElement('input');
    inputForProjectTitle.setAttribute('type', 'text');
    inputForProjectTitle.setAttribute('id', 'add-project');
    inputForProjectTitle.setAttribute('required', '');
    const submitProjectButton = document.createElement('button');
    submitProjectButton.setAttribute('id', 'submit-project');
    submitProjectButton.textContent = 'Add Project';
    addProjectDiv.appendChild(addProjectHeader);
    addProjectDiv.appendChild(closeProjectSpan);
    addProjectDiv.appendChild(inputForProjectTitle);
    addProjectDiv.appendChild(submitProjectButton);
    modalForAddProject.appendChild(addProjectDiv);

    mainContent.appendChild(sidebarDiv);
    mainContent.appendChild(addTaskBarDiv);
    mainContent.appendChild(taskContainerDiv);
    mainContent.appendChild(modalForAddTask);
    mainContent.appendChild(modalForAddProject);
}

function showModalForTask() {
    document.getElementsByClassName('modal-task')[0].style.display = "flex";
}

function showModalForProject() {
    document.getElementsByClassName('modal-project')[0].style.display = "flex";
}

function closeAndClearModalForTask() {
    let title = document.getElementById('add-title');
    title.value = '';
    let dueDate = document.getElementById('due-date');
    dueDate.value = '';
    let priority = document.getElementById('priority');
    priority.value = 'low';
    let description = document.getElementById('description');
    description.value = '';
    document.getElementsByClassName('modal-task')[0].style.display = "none";
}

function closeAndClearModalForProject() {
    let title = document.getElementById('add-project');
    title.value = '';
    document.getElementsByClassName('modal-project')[0].style.display = "none";
}


export { 
    loadOnStart, 
    showModalForTask, 
    closeAndClearModalForTask, 
    showModalForProject,
    closeAndClearModalForProject };

