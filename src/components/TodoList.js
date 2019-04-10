import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    return (
        <div className='todos'>
            {props.todos.map(todo => (
                <Todo key={todo.id} todo={todo} checkTodo={props.checkTodo}/>
            ))}
        </div>
    )
}

export default TodoList;