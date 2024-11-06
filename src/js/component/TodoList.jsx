// src/TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, borrarTarea }) {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} borrarTarea={() => borrarTarea(index)} />
      ))}
    </ul>
  );
}

export default TodoList;
