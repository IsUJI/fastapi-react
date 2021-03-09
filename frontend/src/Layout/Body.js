import React, { useState } from 'react';
import AddTodo from '../Todo/AddTodo'
import TodoList from '../Todo/TodoList'
import TodoItem from '../Todo/TodoItem';
import { Grid, Paper } from '@material-ui/core'



const styles = {
    Paper: { padding: 20, margonTop: 10, marginBottom: 10, overflowY:'auto'}
}

const IdContext = React.createContext({
    id: 0
})

export default function Body () {

    const [id, setId] = useState(0)
    setId(0)

    return (
        <div>
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

