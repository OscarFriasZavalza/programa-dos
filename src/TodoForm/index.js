import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const { addTodo,setOpenModal} = React.useContext(TodoContext);

  const onChange=(event)=>{
  setNewTodoValue(event.target.value) ;
  };

  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
    setNewTodoValue('');
    
};

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea value={newTodoValue} placeholder="Escribe tu Tarea" 
      onChange={onChange}/>
      <div className="TodoForm-buttonContainer">
        <button className="TodoForm-button TodoForm-button--cancel" type="button" onClick={onCancel}
        >
          CANCELAR
        </button>
        <button className='TodoForm-button TodoForm-button--add' type="submit">AÑADIR</button>
      </div>
    </form>
  );
}

export { TodoForm };
