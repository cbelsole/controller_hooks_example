import React, { useState, useEffect } from 'react';
import { getTodos, completeTodo as completeTodoAPI, iTodo } from '../api/todos';
import TodoList from './todoList';

const Controller: React.FunctionComponent = () => {
  const [todos, setTodos] = useState<iTodo[]>([]);

  const completeTodo = (item: string) => {
    completeTodoAPI(item).then(todos => setTodos(todos));
  };

  const isAllComplete = () => {
    for (let i = 0; i < todos.length; i++) {
      if (!todos[i].done) {
        alert('Todos are not complete.');
        return;
      }
    }

    alert('Todos are complete.');
  };

  useEffect(() => {
    getTodos().then(todos => setTodos(todos));
  }, []);

  if (!todos.length) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <TodoList completeTodo={completeTodo} todos={todos} />
      <button onClick={isAllComplete}>All complete?</button>
    </div>
  );
};

export default Controller;
