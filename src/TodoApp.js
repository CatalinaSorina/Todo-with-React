import React from 'react';

class TodoApp extends React.Component {
    constructor() {
        super();
        this.state = {
            todos:[]
        }
    }

    render() {
        return (
            <div>
                <h1>To do:</h1>
            </div>
        )
    }
}

export default TodoApp;