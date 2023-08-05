import React from 'react';
import NavBar from "./NavBar.jsx"
import Task from './task/Task.jsx';

const tareasCargadas = [
    {
        "id": 1,
        "titulo": "tarea Default 1"
    },
    {
        "id": 2,
        "titulo": "tarea Default 2"
    },
    {
        "id": 3,
        "titulo": "tarea Default 3"
    }
];


const TaskHead = () => {
    return(
        <>
         <NavBar></NavBar>
        <Task tareasCargadas={tareasCargadas}></Task>
        </>
    )
}
export default TaskHead;