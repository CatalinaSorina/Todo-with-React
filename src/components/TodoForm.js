import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: ''
        }
    }

    changes = e => {
        this.setState({ [e.target.task]: e.target.value });
    }

    submitTodo = e => {
        e.preventDefault();
        this.props.newTodo(this.state.todo);
        this.setState({ todo:'' });
    }


    deleteFinishedTodos = () => {
        this.props.todosForm.filter(todo=> todo.finished===false)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitTodo}>
                    <input name='todo' value={this.state.todo} onChange={this.changes}/>
                    <button>new</button>
                </form>
                <button onClick={this.deleteFinishedTodos}>Clear todos</button>
            </div>
        )
    }
}

export default TodoForm;