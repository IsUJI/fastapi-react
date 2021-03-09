import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText } from '@material-ui/core';

const TodosContext = React.createContext({
    todos: [], getTodos: () => {}
})

export default function TodoList () {

    const [todos, setTodos] = useState([])
    const getTodos = async () => {
        axios.get(`http://localhost:8000/todos`)
        .then(res => {
            const todos = res.data;
            setTodos(todos);
        })
    }

    useEffect( () => {
        getTodos()
    }, [])

    return (
        <TodosContext.Provider value={{todos, getTodos}}>
            <div>
                { todos.map((todo) => (
                    <List component="nav">
                        <ListItem key={todo.id} button>
                            <ListItemText 
                                primary={todo.item}
                            />
                        </ListItem>
                    </List>
                    
                ))}
            </div>
        </TodosContext.Provider>
    
    )

}