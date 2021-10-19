import React from 'react';

const Todo = ({todos, todo, setTodos}) => {
    const deleteHandler = () => {
        setTodos(todos.filter(item => item.id !== todo.id));
    }
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id)
                return {...item, completed: !item.completed};
            return item;
        }));
    }
    return (
        <div className="todo">
            <div className="todo-check">
                <input type="checkbox" className="todo-checkbox" onClick={completeHandler}/>
                <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{todo.text}</li>
            </div>
                <button onClick={deleteHandler} className="todo-delete-btn">Delete</button>
        </div>
    );
};

export default Todo;