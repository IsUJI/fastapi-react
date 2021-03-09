import React from 'react';
import { IdContext } from '../Context'
// import axios from 'axios';


export default function TodoItem () {

    const id = React.useContext(IdContext)

    return (
        <IdContext.Consumer>
        <div>
            <p>{id}</p>
        </div>
        </IdContext.Consumer>
    );

    // onSelected(id) {
    //     const todo = {
    //         todo: this.state.todo
    //       }

    //     axios.get(`http://localhost:8000/todos/${this.state.todo.id}`)
    //     .then(res => {
    //         const todo = res.data;
    //         this.setState({ todo });
    //     })
    // }

    // render() {
        
    //     // this.setState({ selectedId: 1 });
    //     const id = this.state.selectedId

    //     if ( id === 0 ) {

    //         return (
    //             <div>
    //                 <p>Select a TODO Item to see the details</p>
    //             </div>
    //         );

    //     } else {

    //         this.onSelected(id)

    //         return (

    //             <div>
    //                 {todo}
    //             </div>

    //         );

    //     }

        
                 
    // }
}