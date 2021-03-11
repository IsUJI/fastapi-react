import React, { useState, useContext } from 'react'
import axios from 'axios';
import { IdContext } from '../Context'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'


export default function UpdateTodo(){

  const {id} = useContext(IdContext);
  const [open, setOpen] = useState(false);
  const [descrip, setDescrip] = useState("")

  const handleChange = event  => {
    setDescrip( event.target.value );
  }

  const onUpdate = () => {
    const newDescrip = {
      "item": descrip
    }
    axios.put(`http://localhost:8000/todos/${id}`, {}, { params:
    newDescrip,
  })
    .then(res => res.status)
    setOpen(false)
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Update TODO
      </Button>

      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="update-todo-title">Update TODO</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To modify the TODO item, introduce the new description
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="newItem"
            label="TODO description"
            onChange={handleChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button color="primary" onClick={onUpdate}>
            Update
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  );

}