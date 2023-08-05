import { Col, Container, Row, Card, Button } from "react-bootstrap";


const Task = () => {
  return (
    <Container className="seccionPrincipal">
      <section className="my-4">
        <h1 className="text-center text-white lead fs-1">Lista de tareas</h1>
        <hr className="text-white" />
        <Row className="mb-4">

          <Col lg={3} md={4} className="mb-3">
            <Card border="primary">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Primary Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button className="btn btn-primary">Eliminar</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
      <section>
      <div class="mb-3">
                <input 
                    type="text" 
                    className="form-control"  
                    placeholder="Agregar una tarea"
                    value=""
                    onChange=""
                />
        </div>
        <div class="mb-3 col-5">
            <button 
                className='btn btn-success'
                onClick=""
            >AGREGAR
        </button>
        </div>
      </section>
    </Container>
  );
};

export default Task;
