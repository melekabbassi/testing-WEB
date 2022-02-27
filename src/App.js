import { useState } from 'react';
import "./App.css"
// components
import ToDoForm from './Components/ToDoForm'
import ToDoList from './Components/ToDoList';

function App() {
  const [todos, setTodos]= useState([]);
  //console.log(todos);

  const [query,setQuery] = useState("");

  const addTodo = () => {
    const newTask = { task: query };
    setTodos((todos) => [...todos, newTask ]);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

// const toggleComplete = (id) => {
//   setTodos(
//     todos.map(todo => {
//       if (todo.id === id){
//         return {...todo, completed: !todo.complete};
//       }
//     return todo;
//     })
//   );
// }

// const removeTodo = (id) => {
//   setTodos(todos.filter(todo => todo.id !== id));
// }

  return (
    <div className="App">
      <h1>ToDo List</h1>
        <ToDoForm addTodo={addTodo} value={query} handleChange={handleChange} />
        <ToDoList todos={todos} />
    </div>
  );
}

export default App;
