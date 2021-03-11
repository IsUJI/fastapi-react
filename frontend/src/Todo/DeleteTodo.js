import React, { useState, useContext } from 'react'
import axios from 'axios';
import { IdContext } from '../Context'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'


export default function UpdateTodo(){

  const {id, setId} = useContext(IdContext);
  const [open, setOpen] = useState(false);

  const onDelete = () => {
    axios.delete(`http://localhost:8000/todos/${id}`)
    .then(res => res.status)
    setId(0)
    setOpen(false)
  }

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={() => setOpen(true)}>
        Delete TODO
      </Button>

      <Dialog open={open} aria-labelledby="alert-dialog-title">
        <DialogTitle id="alert-dialog-title">Delete TODO</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button color="primary" onClick={onDelete}>
            Accept
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  );

}