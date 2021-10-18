import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';

function App() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    return (
        <div className="App">
            <header>My todo list</header>
            <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
        </div>
    );
}

export default App;
