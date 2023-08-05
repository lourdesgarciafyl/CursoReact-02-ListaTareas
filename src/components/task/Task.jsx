import { Col, Container, Row, Card, Button } from "react-bootstrap";
import TaskAdd from "./TaskAdd";
import TaskItem from "./TaskItem";


const Task = () => {
  return (
    <Container className="seccionPrincipal">
      <TaskItem></TaskItem>
      <TaskAdd></TaskAdd>
    </Container>
  );
};

export default Task;
