import React, { useContext, useEffect, useState } from 'react';
import { IdContext } from '../Context'
import axios from 'axios';
import { Grid, Typography } from '@material-ui/core';
import UpdateTodo from './UpdateTodo';
import DeleteTodo from './DeleteTodo';

const styles = {
	Body: { margonTop: 80, marginBottom: 20, marginLeft: 80, marginRight: 80 }
}

export default function TodoItem () {

	const {id} = useContext(IdContext);
	const [todo, setTodo] = useState([]);

	const onSelected = async () => {
		axios.get(`http://localhost:8000/todos/${id}`)
		.then(res => {
			setTodo(res.data);
		})
	}

	useEffect( () => {
		if(id !== 0){
			onSelected();
		}
	}, [id]);

	if ( id === 0 ) {

		return (

			<div>
				<Typography variant="h2" gutterBottom>
					Welcome!
				</Typography>
				<br></br>
				<Typography variant="h4" gutterBottom>
					Select a TODO Item to see the details
				</Typography>
			</div>

		);

	} else {

		return (

			<div>
				<Typography variant="h2" gutterBottom>
					TODO #{id}
				</Typography>
				<br></br>
				<Typography variant="h5" gutterBottom>
					{todo.item}
				</Typography>
				<br></br>
				<div style={styles.Body}>
					<Grid container>
						<Grid item sm>
								<UpdateTodo /> 
						</Grid>
						<Grid item sm>
								<DeleteTodo />
						</Grid>
					</Grid>
				</div>
			</div>

		);

	}

}