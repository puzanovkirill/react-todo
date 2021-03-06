import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
   const [inputText, setInputText] = useState('');
   const [todos, setTodos] = useState([]);
   const [filter, setFilter] = useState('All');
   const [filteredTodos, setFilteredTodos] = useState([]);

   const filterHandler = () => {
      switch (filter) {
         case 'Completed': {
            setFilteredTodos(todos.filter((item) => item.completed === true));
            break;
         }
         case 'Uncompleted': {
            setFilteredTodos(todos.filter((item) => item.completed === false));
            break;
         }
         default: {
            setFilteredTodos(todos);
            break;
         }
      }
   };

   useEffect(() => {
      getLocalTodos();
   }, []);

   useEffect(() => {
      saveLocalTodos();
      filterHandler();
   }, [todos, filter]);

   const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
   };

   const getLocalTodos = () => {
      if (localStorage.getItem('todos') === null) {
         localStorage.setItem('todos', JSON.stringify([]));
      } else {
         let todoFromLocalStorage = JSON.parse(localStorage.getItem('todos'));
         setTodos(todoFromLocalStorage);
      }
   };
   return (
      <div className="App">
         <header>My todo list</header>
         <Form
            todos={todos}
            setTodos={setTodos}
            inputText={inputText}
            setInputText={setInputText}
            setFilter={setFilter}
         />
         <TodoList
            todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}
         />
      </div>
   );
}

export default App;
