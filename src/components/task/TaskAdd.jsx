import { Button } from "react-bootstrap";

const TaskAdd = () => {
    return (
        <section className="d-flex flex-column align-items-center">
        <div className="mb-3 col-md-4 col-sm-10">
                  <input 
                      type="text" 
                      className="form-control"  
                      placeholder="Agregar una tarea"
                      value=""
                      onChange=""
                  />
          </div>
          <div class="mb-3">
              <Button 
                  className='btn btn-success w-100'
                  onClick=""
              >Agregar
          </Button>
          </div>
        </section>
    )
}
export default TaskAdd;