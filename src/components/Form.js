import React from 'react';

const Form = () => {
    return (
        <form className="todo-form">
            <input type="text" className="todo-input" placeholder="Add new..."/>
            <button className="todo-button" type="submit">Add</button>
            <hr/>
            <div className="select">
                <div className="filter-header">Filter</div>
                <select name="todos" className="filter">
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;