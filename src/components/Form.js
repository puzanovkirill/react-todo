import React from 'react';

const Form = ({ setFilter, todos, setTodos, inputText, setInputText }) => {
   const inputTextHandeler = (e) => {
      setInputText(e.target.value);
   };
   const submitTodoHandler = (e) => {
      e.preventDefault();
      setTodos([
         ...todos,
         { text: inputText, completed: false, id: Math.random() * 1000 },
      ]);
      setInputText('');
   };

   const filterChangeHandeler = (e) => {
      setFilter(e.target.value);
   };
   return (
      <form className="todo-form">
         <div className="input-box">
            <input
               value={inputText}
               onChange={inputTextHandeler}
               type="text"
               className="todo-input"
               placeholder="Add new..."
            />
            <button
               onClick={submitTodoHandler}
               className="todo-button"
               type="submit"
            >
               Add
            </button>
         </div>
         <hr />
         <div className="select">
            <div className="filter-header">Filter</div>
            <select
               name="todos"
               className="filter"
               onChange={filterChangeHandeler}
            >
               <option value="All">All</option>
               <option value="Completed">Completed</option>
               <option value="Uncompleted">Uncompleted</option>
            </select>
         </div>
      </form>
   );
};

export default Form;
