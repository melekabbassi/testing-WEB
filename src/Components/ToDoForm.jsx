import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid';
import { TextField, Button } from '@mui/material'

const ToDoForm = ({addTodo}) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false
  });

  const handleTaskInputChange = (event) =>{
    setTodo({...todo, task: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo.task.trim()) {
      addTodo({...todo, id: uuidv4() })
        //reset Task Input
      setTodo({...todo, task: ""})
    }
  }
  return (
    <form onSubmit={handleSubmit}>
        <TextField label="Task" type="text" name="Task" value={todo.task} onChange={handleTaskInputChange} />
        <Button type="submit">Submit</Button>
    </form>
  )
}

export default ToDoForm