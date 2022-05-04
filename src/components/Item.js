import React, { useRef, useState } from "react";

function Item(props){
    const[Myinput,setMyinput] = useState(0)

    const myli = useRef(null)
    const myinput = useRef(null)
    
    const {todo} = props
    const {id,done} = todo

    function handleChange(e){
        props.updateTodoDone(id,e.target.checked)
    }
    function handleClick(){
        props.deleteTodo(id)
    }
    
    function handleDoubleClick(){
        myli.current.className = done?"completed editing":"editing"
        setMyinput(1)
    }
    function handleKeyUp(e){
        const{keyCode} = e
        if(keyCode!==13) return
        console.log(myinput.current.value)
        props.updateTodoContent(todo.id,myinput.current.value)
        setMyinput(0)
        myli.current.className = done?"completed":""
    }
    function handleBlur(){
        props.updateTodoContent(todo.id,myinput.current.value)
        setMyinput(0)
        myli.current.className = done?"completed":""
    }
    return(
        <li className={done?"completed":""} key={id} ref={myli}>
            <div className='view'>
                <input className='toggle' type='checkbox' onChange={handleChange} checked={done}/>
                <label onDoubleClick={handleDoubleClick}>{todo.content}</label>
                <button className='destroy' onClick={handleClick}></button>
            </div>
            {Myinput?<input className="edit" ref={myinput} defaultValue={todo.content} autoFocus onKeyUp={handleKeyUp} onBlur={handleBlur} />:null}
        </li>
    )
}

export default Item