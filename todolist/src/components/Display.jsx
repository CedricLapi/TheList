
import React from 'react';

const Display = (props) => {
    const {todoList, setTodoList} = props;

    const deleteButton = (idfrombelow) => {
        setTodoList(todoList.filter((todo, index) => todo.id !== idfrombelow));
    }

    const handleCompleted = (todo) => {
        todo.markedDelete = !todo.markedDelete;
        setTodoList([...todoList])
    }

    const styled = (markedDelete) => {
        if(markedDelete === true){
            return "completed"
        }
        else{
            return "notCompleted"
        }
    }
  return (
    <div>
<h2>Display:</h2>
        {
            todoList.map((todo, index) => (
                <div key={index}>
                    <p className={styled(todo.markedDelete)}>{todo.todotext}</p>
                    <input onClick={() => handleCompleted(todo)} type="checkbox" />
                    <button onClick={() => deleteButton(todo.id)}>Delete</button>
                </div>
            ))
        }
    </div>
  )
}

export default Display