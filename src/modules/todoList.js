import {isSameWeek, format} from 'date-fns';
import { v4 as uuidv4 } from 'uuid';

let taskList = [];

function createTask(title, dueDate, priority, description, project) {
    let id = uuidv4();
    let projectName = project || 'none';
    let date = format(dueDate, 'yyyy-MM-dd');
    task = {id,title, date, dueDate, priority, description, projectName};
    taskList.push(task);
}

function getOneTask(id) {
    return taskList.filter(task => task.id === id);
}

function getTasks(details) {
    if (details === 'all') return taskList;
    if (details === 'today') {
        let dateToday = format(new Date(), 'yyyy-MM-dd');
        let tasksToday = taskList.filter(task => task.date === dateToday);
        return tasksToday;
    }
    if (details === 'week') {
        let tasksForWeek = taskList.filter(task => isSameWeek(new Date() ,task.dueDate));
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

export {createTask,getOneTask, getTasks, updateTask, deleteTask};
