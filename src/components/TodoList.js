import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
   return (
      <div className="todo-container">
         <ul className="todo-list">
            {filteredTodos.map((item) => {
               return (
                  <Todo
                     key={item.id}
                     todos={todos}
                     setTodos={setTodos}
                     todo={item}
                  />
               );
            })}
         </ul>
      </div>
   );
};

export default TodoList;
