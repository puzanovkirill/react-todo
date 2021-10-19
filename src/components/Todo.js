import React from 'react';

const Todo = ({todos, todo, setTodos}) => {
    const deleteHandler = () => {
        setTodos(todos.filter(item => item.id !== todo.id));
    }
    const competeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id)
                return {...item, completed: !item.completed};
            return item;
        }));
    }
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{todo.text}</li>
            <button onClick={competeHandler} className="todo-complete-btn">Complete</button>
            <button onClick={deleteHandler} className="todo-delete-btn">Delete</button>
        </div>
    );
};

export default Todo;