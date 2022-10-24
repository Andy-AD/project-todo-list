import {isSameWeek, format} from 'date-fns';
import { v4 as uuidv4 } from 'uuid';

let taskList = [
    {title: 'Clean house', dueDate: '2023-08-04', priority: 'medium',id: 'kadlfkhadf123', description: 'Throw before Mom comes home', projectName: 'Household'},
    {title: 'Do homework', dueDate: '2023-03-04', priority: 'high',id: 'kadlfkhadf124', description: 'Do it properly, concentrate!', projectName: 'School'},
    {title: 'Change password', dueDate: '2022-12-04', priority: 'low',id: 'kadlfkhadf125', description: 'Proper password', projectName: 'Work'}
];

let projects = [
    'Household', 'School', 'Work'
];

function addTask(title, dueDate, priority, description, projectName) {
    let id = uuidv4();
    let task = {id,title, dueDate, priority, description};
    if (projectName) {
        task.projectName
    }
    taskList.push(task);
}

function addProject(name) {
    projects.push(name);
}

function getProjects() {
    return projects;
}

function deleteProject(projectToDelete) {
    let indexToDelete = projects.findIndex(project => project === projectToDelete);
    projects.splice(indexToDelete,1);
    taskList.forEach(task => {
        if (task.projectName === projectToDelete) {
            deleteTask(task.id);
        }
    })
}

function getOneTask(id) {
    return taskList.filter(task => task.id === id)[0];
}

function getTasks(view, project) {
    if (view === 'all') return taskList;
    if (view === 'today') {
        let dateToday = format(new Date(), 'yyyy-MM-dd');
        let tasksToday = taskList.filter(task => task.dueDate === dateToday);
        return tasksToday;
    }
    if (view === 'week') {
        let tasksForWeek = taskList.filter(task => isSameWeek(new Date() ,new Date(task.dueDate)));
        return tasksForWeek;
    }
    if (view === 'project') {
        let projectTasks = taskList.filter(task => task.projectName === project);
        return projectTasks;
    }     
}

function updateTask(id, details) {
    let indexToUpdate = taskList.findIndex(task => task.id === id);
    taskList[indexToUpdate].title = details.title;
    taskList[indexToUpdate].dueDate = details.dueDate;
    taskList[indexToUpdate].priority = details.priority;
    taskList[indexToUpdate].description = details.description;
}

function deleteTask(id) {
    let indexToDelete = taskList.findIndex(task => task.id === id);
    taskList.splice(indexToDelete,1);
}

function completeTask(id) {
    const taskIndex = taskList.findIndex(task => task.id === id);
    taskList[taskIndex].completed = true;
    taskList[taskIndex].completedDate = format(new Date(), 'yyyy-MM-dd');
}

function undoCompleteTask(id) {
    const taskIndex = taskList.findIndex(task => task.id === id);
    taskList[taskIndex].completed = false;
    taskList[taskIndex].completedDate = null;
}

export {
    addTask,
    getOneTask, 
    getTasks, 
    updateTask, 
    deleteTask,
    addProject,
    getProjects,
    completeTask,
    undoCompleteTask,
    deleteProject
    };
