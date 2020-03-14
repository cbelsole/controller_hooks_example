import * as React from 'react';
import { iTodo } from '../api/todos';
import Todo from './todo';

interface Props {
  todos: Array<iTodo>;
}

const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li>
          <Todo {...todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
