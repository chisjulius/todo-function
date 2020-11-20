import React, { useState } from 'react';

function Todo ({ todo, index, completeTodo, deleteTodo}) {
  return <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}} className="todo collection-item">
    {todo.text}
    <div>
      <button onClick={() => completeTodo(index)} className="btn-small">Complete</button>
      <button onClick={() => deleteTodo(index)} className="btn-small">X</button>
    </div>
  </div>
}
function TodoForm({addTodo}){
  const [value, setValue] = useState("");

  const handleSubmit = e =>{
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue("");
  }
  return (
    <div className="collection-item">
       <form onSubmit={handleSubmit}>
         <label htmlFor="addtodo">Add Todo</label>
         <input type="text" id="addtodo" value={value} onChange={e => setValue(e.target.value)}></input>
       </form>
    </div>

  )
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn  about React',
      isCompleted: false
    },
    {
      text: 'Meet friend for launch',
      isCompleted: false
    },
    {
      text: 'Build really cool todo app',
      isCompleted: false
    }
  ]) 

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos)
  }

  const completeTodo =index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos)
  }
  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos)
  }
  return (
    <div className="App container">
      <div className="todo-List collection">
        {todos.map((todo, index) =>(
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>

    </div>
  );
}

export default App;
