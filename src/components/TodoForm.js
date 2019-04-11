import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: ''
        }
    }

    changes = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitTodo = e => {
        e.preventDefault();
        this.props.newTodo(this.state.todo);
        this.setState({ todo:'' });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitTodo}>
                    <input name='todo' value={this.state.todo} onChange={this.changes}/>
                    <button>new</button>
                </form>
                <button onClick={this.props.deleteFinishedTodos}>Clear finished todos</button>
            </div>
        )
    }
}

export default TodoForm;