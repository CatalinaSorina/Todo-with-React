import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

let todos = [
    {
        id:1,
        task:'Brush teeth',
        finished: false
    },
    {
        id:2,
        task:'Take a shower',
        finished: false
    },
    {
        id:3,
        task:'Cook dinner',
        finished: false
    },
    {
        id:4,
        task:'Learn more coding',
        finished: false
    },
    {
        id:5,
        task:'Eat breakfast',
        finished: false
    }
];

class TodoApp extends React.Component {
    constructor() {
        super();
        this.state = {
            todos
        }
    }

    newTodo = aNewTodo => {
        let nr=0;
        this.state.todos.map(todo=>{
            nr=(nr < todo.id) ? todo.id:nr
        })
        this.state.todos.push({
            id:(nr+1),
            task:aNewTodo,
            finished: false
        });

        this.setState({todos: this.state.todos});
        console.log(this.state.todos);
    }

    checkTodo = todoId => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === todoId) {
                    return {
                        ...todo,
                        finished:!todo.finished
                    };
                }
                return todo;
            })
        });
    }

    deleteFinishedTodos = () => {
        this.setState({todos: this.state.todos.filter(todo => todo.finished===false)})
        console.log(this.state.todos);
    }

    render() {
        return (
            <div>
                <h1>To do:</h1>
                <TodoForm newTodo={this.newTodo} deleteFinishedTodos={this.deleteFinishedTodos}/>
                <TodoList todos={this.state.todos} checkTodo={this.checkTodo}/>
            </div>
        )
    }
}

export default TodoApp;