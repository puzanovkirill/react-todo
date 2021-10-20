import React, { useState, useEffect } from 'react';

const Todo = ({ todos, todo, setTodos }) => {
   const [isEditing, setIsEditing] = useState(false);

   const deleteHandler = () => {
      setTodos(todos.filter((item) => item.id !== todo.id));
   };
   const completeHandler = () => {
      setTodos(
         todos.map((item) => {
            if (item.id === todo.id)
               return { ...item, completed: !item.completed };
            return item;
         })
      );
   };

   const editHandeler = (e) => {
      if (isEditing) {
         todo.text = e.target.value;
         console.log(setTodos);
      }
      setTodos([...todos]);
   };

   return (
      <div className="todo">
         <div className="todo-check">
            <input
               type="checkbox"
               className="todo-checkbox"
               onChange={completeHandler}
               checked={todo.completed ? true : false}
            />
            <input
               type="text"
               className={`todo-edit-input ${
                  isEditing ? 'visible' : 'invisible'
               }`}
               defaultValue={`${isEditing ? todo.text : ''}`}
               onChange={editHandeler}
            />
            <li
               className={`todo-item ${todo.completed ? 'completed' : ''} ${
                  isEditing ? 'invisible' : 'visible'
               }`}
            >
               {todo.text}
            </li>
         </div>
         <div className="btn-wrapper">
            <button
               onClick={() => {
                  setIsEditing(!isEditing);
               }}
               className="todo-edit-btn"
            >
               Edit
            </button>
            <button onClick={deleteHandler} className="todo-delete-btn">
               Delete
            </button>
         </div>
      </div>
   );
};

export default Todo;
