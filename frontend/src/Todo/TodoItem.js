import React, { useContext, useEffect, useState } from 'react';
import { IdContext } from '../Context'
import axios from 'axios';
import { Typography } from '@material-ui/core';


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
			</div>

		);

	}

}