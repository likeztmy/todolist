import React from "react"

function Filter(props){
    function handleClickAll(){
        props.showAll()
    }
    function handleClickActive(){
        props.showActive()
    }
    function handleClickCompleted(){
        props.showCompleted()
    }
    function handleClick(){
        props.deleteTodos()
    }
    return(
        <footer className="footer">
            <span className="todo-count">{props.count} {props.count>1?'Items':'Item'} left</span>
            <ul className="filters">
                <li>
                    <a href="#/" className={props.show===1?"selected":''} onClick={handleClickAll}>All</a>
                </li>
                <li>
                <a href="#/active" className={props.show===2?"selected":''} onClick={handleClickActive}>Active</a>
                </li>
                <li>
                <a href="#/completed" className={props.show===3?"selected":''} onClick={handleClickCompleted}>Completed</a>
                </li>
            </ul>
            <button className="clear-completed" onClick={handleClick}>Clear completed</button>
        </footer>
    )
}

export default Filter