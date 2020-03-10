import * as React from 'react';
import { iTodo } from '../api/todos';
import Todo from './todo';

interface Props {
  todos: Array<iTodo>;
  completeTodo: (item: string) => void;
}

const TodoList: React.FC<Props> = ({ todos, completeTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li>
          <Todo completeTodo={completeTodo} {...todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
