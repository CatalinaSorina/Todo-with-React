import React from 'react';

const todos = [
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

    render() {
        return (
            <div>
                <h1>To do:</h1>
            </div>
        )
    }
}

export default TodoApp;