import React, { useState } from 'react'

const Forms = (props) => {

    const {todoList, setTodoList} = props;

    const [todotext, setTodoText] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        setTodoList([...todoList, {
          todotext: todotext,
          id: Math.floor(Math.random() * 10000).toString(),
          markedDelete: false
        }
      ])
        setTodoText("");
    }

  return (

    <div>
      <h1>Fill the form:</h1>

        <form onSubmit={submitHandler}>

            <input onChange={(e) => setTodoText(e.target.value)} value={todotext} type="text" />
            <button>Add</button>

        </form>

    </div>
  )
}

export default Forms;