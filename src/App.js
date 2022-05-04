import {useState } from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List'

function App() {
  const[todos,setTodos] = useState([])

  function addTodo(todoObj){
    setTodos([todoObj,...todos])
  }

  function updateTodoDone(id,done){
    const newTodos = todos.map((todo)=>{
      if(todo.id===id) return {...todo,done}
      else return todo
    })
    setTodos(newTodos)
  }

  function updateTodosDone(done){
    const newTodos = todos.map((todo)=>{
      return {...todo,done}
    })
    setTodos(newTodos)
  }

  function updateTodoContent(id,content){
    const newTodos = todos.map((todo)=>{
      if(todo.id===id) return {...todo,content}
      else return todo
    })
    setTodos(newTodos)
  }

  function deleteTodo(id){
    const newTodos = todos.filter((todo)=>{
      return todo.id !== id
    })
    setTodos(newTodos)
  }

  function deleteTodos(){
    const newTodos = todos.filter((todo)=>{
      return todo.done === false
    })
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Header addTodo={addTodo}/>
      <List todos={todos} updateTodoDone={updateTodoDone} updateTodosDone={updateTodosDone} updateTodoContent={updateTodoContent} deleteTodo={deleteTodo}
      deleteTodos={deleteTodos} />
    </div>
  );
}

export default App;
