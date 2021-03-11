import React from 'react';
import AddTodo from '../Todo/AddTodo'
import TodoList from '../Todo/TodoList'
import TodoItem from '../Todo/TodoItem';
import { Grid, Paper } from '@material-ui/core'



const styles = {
	Paper: { padding: 20, margonTop: 10, marginBottom: 10, overflowY:'auto', height: 700 },

	Body: { margonTop: 80, marginBottom: 80, marginLeft: 80, marginRight: 80 }
}

export default function Body () {

	return (
		<div style={styles.Body}>
			<AddTodo />
			<Grid container>
				<Grid item sm>
				<Paper style={styles.Paper}>
					<TodoList/>
				</Paper>
				</Grid>
				<Grid item sm>
				<Paper style={styles.Paper}>
					<TodoItem />
				</Paper>
				</Grid>
			</Grid>
		</div>
	)
}

