import React from "react"
import { useEffect,useState } from "react"
import Item from "./Item"
import Filter from "./Filter"
function List(props){
    const {todos} = props

    const[showTodos,setShowTodos] = useState(todos)
    const[count,setCount] = useState(0)
    const[show,setShow] = useState(1)

    function handleChange(e){
        props.updateTodosDone(e.target.checked)
    }

    function showAll() {
        setShow(1)
    }
  
    function showActive(){
        setShow(2)
    }

    function showCompleted(){
        setShow(3)
    }
    
    useEffect(()=>{
      var newCount = 0
      for(var i=0;i<todos.length;i++){
        if(todos[i].done===false){
          newCount=newCount+1
        }
      }
      setCount(newCount)
      if(show===1){
        const newTodos = todos
        setShowTodos(newTodos)
      }
      else if(show===2){
        const newTodos = todos.filter((todo)=>{
          return todo.done === false 
        })
        setShowTodos(newTodos)
      }
      else if(show===3){
        const newTodos = todos.filter((todo)=>{
          return todo.done === true
        })
        setShowTodos(newTodos)
      }
    },[show,todos])

    return(
        <section style={{display:todos.length===0?'none':'block'}} className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" onChange={handleChange}/>
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
            {
                showTodos.map(todo=>{
                return(
                    <Item key={todo.id} todo={todo} updateTodoDone={props.updateTodoDone} deleteTodo={props.deleteTodo} updateTodoContent={props.updateTodoContent} />
                )})
            }
            </ul>
            <Filter count={count} show={show} showAll={showAll} showActive={showActive} showCompleted={showCompleted} deleteTodos={props.deleteTodos} />
        </section>
    )
}
export default List