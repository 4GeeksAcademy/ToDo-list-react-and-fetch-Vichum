// src/App.js
import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const añadirTarea = (element) => {
    element.preventDefault();
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const borrarTarea = (index) => {
    setTodos(todos.filter((a, i) => i !== index));
  };

  return (
    <div className="app">
      <h1>Tareas Pendientes</h1>
      <form onSubmit={añadirTarea}>
        <input
          type="text"
          placeholder="Escribe aquí tu tarea"
          value={input}
          onChange={(element) => setInput(element.target.value)}
        />
      </form>
      <TodoList todos={todos} borrarTarea={borrarTarea} />
      <div className="items-left">
        {todos.length > 0 ? `${todos.length} tarea${todos.length > 1 ? 's' : ''} pendiente` : "No hay tareas, añadir tareas"}
      </div>
    </div>
  );
}

export default App;
