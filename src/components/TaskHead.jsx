import React from 'react';
import NavBar from "./NavBar.jsx"
import Task from './task/Task.jsx';

const TaskHead = () => {
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
    
    return(
        <>
         <NavBar></NavBar>
        <Task></Task>
        </>
    )
}
export default TaskHead;