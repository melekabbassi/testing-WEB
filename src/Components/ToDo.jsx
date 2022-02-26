import { Checkbox, IconButton, ListItem, Typography } from '@mui/material'
import CloseIcon from "@mui/material/Icon"
import React from 'react'

const ToDo = ({todo, toggleComplete, removeTodo}) => {
  const handleCheckboxClick = () =>{
    toggleComplete(todo.id)
  }

  const handleRemoveClick = () => {
    removeTodo(todo.id)
  }

  return (
    <ListItem style={{display: "flex"}}>
      <Checkbox checked={todo.completed} onClick={handleCheckboxClick} />
      <Typography variant="body1" style={{TextDecoration: todo.completed ? "line-through" : null}} >
        {todo.task}
      </Typography>
      <IconButton onClick={handleRemoveClick}>
        <CloseIcon />
      </IconButton>
    </ListItem>
  )
}

export default ToDo