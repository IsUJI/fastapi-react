import React from 'react';
import Header from './Header'
import AddTodo from './TodoList/AddTodo'


export default function App() {
  return (
    <div className="App">
      <Header />
      <AddTodo />
    </div>
  );
}
