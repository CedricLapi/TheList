
import { Form } from 'react-router-dom'
import './App.css'

import Forms from './components/Forms'
import { useState } from 'react'
import Display from './components/Display';

function App() {

  const [todoList, setTodoList] = useState([]);
  

  return (
    <>
      <Forms todoList={todoList} setTodoList={setTodoList} />
      <Display todoList={todoList} setTodoList={setTodoList} />
      
    </>
  )
}

export default App
