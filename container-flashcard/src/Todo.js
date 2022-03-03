import { useState } from "react"

const Todo = (props) =>{
  const [todos, setTodos] = useState(props.initialTodos || [])


  // READ
  // [{id,todo,completed},...] => [<p>todo</p>,....]
  const renderTodos = () => {
    return todos.map((x) => {
      return (
        <div key={x.id} style={{ textDecoration: x.completed ? "line-through" : ''}}>
          <p>{x.todo}</p>
          </div>
      )
    })
  }
         
  return (
    <div>
      <h1>{props.name}</h1>
      
      <div>{renderTodos()}</div>
    </div>
  );
};
export default Todo