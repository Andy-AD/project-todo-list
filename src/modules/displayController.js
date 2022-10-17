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
    addProjectButton.appendChild(plusIcon);
    addProjectButton.textContent = 'New project';
    addTaskBarDiv.appendChild(addTaskButton);
    addTaskBarDiv.appendChild(addProjectButton);

    const taskContainerDiv = document.createElement('div');
    taskContainerDiv.classList.add('task-container');

    mainContent.appendChild(sidebarDiv);
    mainContent.appendChild(addTaskBarDiv);
    mainContent.appendChild(taskContainerDiv);
}

const addTaskModalDiv = document.createElement('div');
addTaskModalDiv.classList.add('add-new-task-modal');

const addTaskDiv = document.createElement('div');
addTaskDiv.classList.add('add-task');
const closeSpan = document.createElement('span');
closeSpan.classList.add('close');
closeSpan.textContent = '&times;'


addTaskModalDiv.appendChild(addTaskDiv);


export {loadOnStart};

