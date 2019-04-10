import React from 'react';

const Todo = props => {
    return (
        <div className={`todo${props.todo.finished ? ' done':''}`} onClick={props.checkTodo(props.todo.id)}>
            {props.todo.task}
        </div>
    )
}

export default Todo;