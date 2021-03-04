import React, { Component } from "react";
import axios from 'axios';
import { TextField } from '@material-ui/core';

  
export default class extends Component {

    state = {
      item: '',
    }

    handleChange = event  => {
      this.setState({ item: event.target.value });
    }

    handleSubmit = (event) => {
      const item = {
        item: this.state.item
      }
    
      axios.post(`http://localhost:8000/todo`, {}, { params:
        item,
      })
      .then(res => res.status)
    }

    render() {

      return (
      <form onSubmit={this.handleSubmit}>
        <TextField
            className="Todo-add"
            label="Add a todo item"
            fullWidth
            margin="normal"
            onChange={this.handleChange}
            variant="outlined"
          />
      </form>
      )
    }
}