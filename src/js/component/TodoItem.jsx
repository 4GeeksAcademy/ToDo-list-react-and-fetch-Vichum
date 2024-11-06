// src/TodoItem.js
import React from 'react';

function TodoItem({ todo, borrarTarea }) {
  return (
    <li className="todo-item">
      {todo}
      <button className="delete-btn" onClick={borrarTarea}>✖</button>
    </li>
  );
}

export default TodoItem;
