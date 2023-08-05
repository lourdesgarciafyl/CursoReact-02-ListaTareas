import { useState } from "react";
import { Button } from "react-bootstrap";

const TaskAdd = ({agregarTarea}) => {
    const [nuevaTarea, setNuevaTarea] = useState(``)

    const onChangeInput = (event) => {
        setNuevaTarea(event.target.value)
    }

    return (
        <section className="d-flex flex-column align-items-center">
        <div className="mb-3 col-md-4 col-sm-10">
                  <input 
                      type="text" 
                      className="form-control"  
                      placeholder="Agregar una tarea"
                      value={nuevaTarea}
                      onChange={(event) => onChangeInput(event)}
                  />
          </div>
          <div className="mb-3">
              <Button 
                  className='btn btn-success w-100'
                  onClick={() => {agregarTarea(nuevaTarea), setNuevaTarea(``)}}
              >Agregar
          </Button>
          </div>
        </section>
    )
}
export default TaskAdd;