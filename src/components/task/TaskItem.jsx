import { Col, Row, Card, Button } from "react-bootstrap";

const TaskItem = () => {
    return(
        <section className="my-4">
        <h1 className="text-center text-white lead fs-1">Lista de tareas</h1>
        <hr className="text-white" />
        <Row className="mb-4">

          <Col lg={3} md={4} className="mb-3">
            <Card border="primary">
              <Card.Body>
                <Card.Title>Tarea N°</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button className="btn btn-danger">Eliminar</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    )
}

export default TaskItem;