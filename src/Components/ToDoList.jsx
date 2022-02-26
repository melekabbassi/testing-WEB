import { List } from '@mui/material';
import ToDo from './ToDo'

const ToDoList = ({todos, removeTodo, toggleComplete}) => {
    return(
        <List>
            {todos.map(todo => (
                <ToDo key={todo.id} todo= {todo} removeTodo={removeTodo} toggleComplete={toggleComplete} />
            ))}
        </List>    
    )
}

export default ToDoList;