
import React from 'react';

const Display = (props) => {
    const {todoList, setTodoList} = props;

    const deleteButton = (idfrombelow) => {
        todoList.filter()
    }
  return (
    <div>
<h2>Display:</h2>
        {
            todoList.map((todo, index) => (
                <div key={index}>
                    <p>{todo.todotext}</p>
                    <button onClick={() => deleteButton(todo.id)}>Delete</button>
                </div>
            ))
        }
    </div>
  )
}

export default Display