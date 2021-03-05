import React from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText } from '@material-ui/core';

export default class TodoList extends React.Component {
    
    state = {
        todos: []
    }


    render() {

        axios.get(`http://localhost:8000/todos`)
        .then(res => {
            const todos = res.data;
            this.setState({ todos });
        })

        return (
            <div>
                { this.state.todos.map((todo) => (
                    <List component="nav">
                        <ListItem button>
                            <ListItemText 
                                primary={todo.item}
                                // onClick={this.onSelected( int({todo.id}) )}   
                            />
                        </ListItem>
                    </List>
                ))}
            </div>
        
        )

    }

}