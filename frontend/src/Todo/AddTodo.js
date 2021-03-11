import React, { useState } from "react";
import axios from 'axios';
import { TextField } from '@material-ui/core';

  
export default function AddTodo () {


  const [item, setItem] = useState("")

  const handleChange = event  => {
    setItem( event.target.value );
  }

  const handleSubmit = (event) => {
    const newItem = {
      "item": item
    }
  
    axios.post(`http://localhost:8000/todos`, {}, { params:
      newItem,
    })
    .then(res => res.status)
  }



  return (
    <form onSubmit={handleSubmit}>
      <TextField
        className="Todo-add"
        label="Add a todo item"
        fullWidth
        margin="normal"
        onChange={handleChange}
        variant="outlined"
        />
    </form>
  )
}