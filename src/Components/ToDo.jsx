import { Checkbox, IconButton, ListItem, Typography } from '@mui/material'
import CloseIcon from "@mui/material/Icon"
import React from 'react'

const ToDo = ({todo}) => {
  
  return (
    <ListItem style={{display: "flex"}}>
      <Checkbox />
      <Typography variant="body1" >
        {todo.task}
      </Typography>
      <IconButton >
        <CloseIcon />
      </IconButton>
    </ListItem>
  )
}

export default ToDo