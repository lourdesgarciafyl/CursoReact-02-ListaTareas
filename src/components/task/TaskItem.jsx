import { Col, Row, Card, Button } from "react-bootstrap";

const TaskItem = ({tarea,  eliminarTarea}) => {
 

    return(
          <Col lg={3} md={4} className="mb-3">
            <Card border="primary">
              <Card.Body>
                <Card.Title>Tarea N° {tarea.id}</Card.Title>
                <Card.Text>
                   {tarea.titulo}
                </Card.Text>
                <Button className="btn btn-danger" onClick={() => eliminarTarea(tarea.id)}>Eliminar</Button>
              </Card.Body>
            </Card>
          </Col>
    )
}

export default TaskItem;