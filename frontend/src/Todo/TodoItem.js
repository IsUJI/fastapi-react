import React from 'react';
import axios from 'axios';
import { Typography } from '@material-ui/core';


export default class TodoItem extends React.Component {
    state = {
        todo: {}
    }

    onSelected(id) {
        const todo = {
            todo: this.state.todo
          }

        axios.get(`http://localhost:8000/todos/${this.state.todo.id}`)
        .then(res => {
            const todo = res.data;
            this.setState({ todo });
        })
    }

    render() {
        return (
            <div>
                <Typography>
                    {/* {this.state.todo} */}
                    Texto
                </Typography>
            </div>
        )
    }
}