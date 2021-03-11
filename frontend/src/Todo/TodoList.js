import React, { createContext, useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { IdContext } from '../Context'
import { List, ListItem, ListItemText } from '@material-ui/core';


const TodosContext = createContext({
	todos: [], getTodos: () => {}
})

export default function TodoList () {

	const {setId} = useContext(IdContext)
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

	const selectTodo = id => {
		setId(id)
	}
	return (
		<TodosContext.Provider value={{todos, getTodos}}>
			<div>
				{ todos.map((todo) => (
					<List component="nav">
						<ListItem key={todo.id} button onClick={() => selectTodo(todo.id)} >
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