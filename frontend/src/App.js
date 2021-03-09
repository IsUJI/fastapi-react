import React from 'react';
import Header from './Layout/Header'
// import AddTodo from './Todo/AddTodo'
// import TodoList from './Todo/TodoList'
// import { Grid, Paper } from '@material-ui/core'
// import TodoItem from './Todo/TodoItem';
import Body from './Layout/Body';

// const styles = {
//   Paper: { padding: 20, margonTop: 10, marginBottom: 10, overflowY:'auto'}
// }


export default function App() {
  return (
  //   <div className="App">
  //     <Header />
  //     <AddTodo />
  //     <Grid container>
  //       <Grid item sm>
  //         <Paper style={styles.Paper}>
  //           <TodoList/>
  //         </Paper>
  //       </Grid>
  //       <Grid item sm>
  //         <Paper style={styles.Paper}>
  //           <TodoItem />
  //         </Paper>
  //       </Grid>
  //     </Grid>
  //   </div>
    <div>
      <Header />
      <Body />
    </div>

  );
}
