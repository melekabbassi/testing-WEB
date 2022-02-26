import { useState } from 'react';
import "./App.css"
// components
import ToDoForm from './Components/ToDoForm'
import ToDoList from './Components/ToDoList';

function App() {
  const [todos, setTodos]= useState([]);


const addTodo = (todo) => {
  setTodos([todo, ...todo]);
}

const toggleComplete = (id) => {
  setTodos(
    todos.map(todo => {
      if (todo.id === id){
        return {...todo, completed: !todo.complete};
      }
    return todo;
    })
  );
}

const removeTodo = (id) => {
  setTodos(todos.filter(todo => todo.id !== id));
}

  return (
    <div className="App">
      <h1>ToDo List</h1>
        <ToDoForm addTodo={addTodo} />
        <ToDoList todos={todos} removeTodo={removeTodo} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
