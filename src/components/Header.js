import React from "react";
import { nanoid } from "nanoid";

function Header(props){
    function handleKeyUp(event){
        const {keyCode,target} = event
        if(keyCode!==13) return
        if(target.value.trim()===''){
            alert('输入不能为空')
            return
        }
        const todoObj = {id:nanoid(),content:target.value,done:false}
        props.addTodo(todoObj)
        target.value = ''
    }
    return(
        <header className="header">
          <h1>todos</h1>
          <input onKeyUp={handleKeyUp} className="new-todo" type="text" placeholder="What needs to be done?"  autoFocus/>
        </header>
    )
}
export default Header