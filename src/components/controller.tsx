import React, { useEffect, useContext } from 'react';
import TodoList from './todoList';
import { todoContext } from './todoProvider';

const Controller: React.FunctionComponent = () => {
  const { todos, getTodos } = useContext(todoContext);

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
    getTodos();
  }, [getTodos]);

  if (!todos.length) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <TodoList todos={todos} />
      <button onClick={isAllComplete}>All complete?</button>
    </div>
  );
};

export default Controller;
