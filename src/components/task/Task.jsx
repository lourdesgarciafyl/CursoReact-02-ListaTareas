import { Col, Container, Row, Card, Button } from "react-bootstrap";
import TaskAdd from "./TaskAdd";
import TaskItem from "./TaskItem";
import { useState } from "react";

const Task = ({tareasCargadas}) => {
  const [tareas, setTareas] = useState(tareasCargadas)

  const agregarTarea = (tarea) => {
    const nuevaTarea = {
      id: tareas[tareas.length -1].id + 1,
      titulo: tarea
    } 
    setTareas([...tareas, nuevaTarea])
  }

  const eliminarTarea = (id) => {
    const filtrarTareas = tareas.filter((tarea)=> tarea.id != id)
    setTareas(filtrarTareas)
  }
  return (
    <Container className="seccionPrincipal">
      <section>
      <h1 className="text-center text-white lead fs-1">Lista de tareas</h1>
        <hr className="text-white" />
        <Row> 
        { tareas.map((tarea)=>(
          <TaskItem
          key={tarea.id}
          tarea={tarea}
          eliminarTarea={(id) => eliminarTarea(id)}>
          </TaskItem>
        ))}
        </Row>
      </section>
      <TaskAdd
      agregarTarea={(nuevaTarea) => agregarTarea(nuevaTarea)}></TaskAdd>
    </Container>
  );
};

export default Task;
