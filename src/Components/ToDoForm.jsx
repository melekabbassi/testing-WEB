import { TextField, Button } from '@mui/material'

const ToDoForm = ({handleChange, value, addTodo}) => {
  
  return (
    <div>
        <TextField label="Task" type="text" name="Task" value={value} onChange={handleChange} />
        <Button type="submit" onClick={addTodo}>Submit</Button>
    </div>
  )
}

export default ToDoForm