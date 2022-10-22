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
    console.log(taskList);
}

function addProject(name) {
    projects.push(name);
}

function getProjects() {
    return projects;
}

function getOneTask(id) {
    return taskList.filter(task => task.id === id)[0];
}

function getTasks(details) {
    if (details === 'all') return taskList;
    if (details === 'today') {
        let dateToday = format(new Date(), 'yyyy-MM-dd');
        let tasksToday = taskList.filter(task => task.dueDate === dateToday);
        return tasksToday;
    }
    if (details === 'week') {
        let tasksForWeek = taskList.filter(task => isSameWeek(new Date() ,new Date(dueDate)));
        return tasksForWeek;
    }
    let projectTasks = taskList.filter(task => task.projectName === details);
    if (projectTasks.length !== 0) {
        return projectTasks;
    } else {
        console.error('Wrong details submitted');
    }    
}

function updateTask(id, details) {
    let indexToUpdate = taskList.findIndex(task => task.id === id);
    console.log(details);    
}

function deleteTask(id) {
    let indexToDelete = taskList.findIndex(task => task.id === id);
    taskList.splice(indexToDelete,1);
}

export {
    addTask,
    getOneTask, 
    getTasks, 
    updateTask, 
    deleteTask,
    addProject,
    getProjects
    };
