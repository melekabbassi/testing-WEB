import { List } from '@mui/material';
import { Checkbox, IconButton, ListItem, Typography } from '@mui/material'
import CloseIcon from "@mui/material/Icon"

const ToDoList = ({todos}) => {
    return(
        <List>
            {todos.map(todos => (
                <ListItem style={{display: "flex"}}>
      <Checkbox />
      <Typography variant="body1" >
        {todos.task}
      </Typography>
      <IconButton >
        <CloseIcon />
      </IconButton>
    </ListItem>
            ))}
        </List>    
    )
}

export default ToDoList;