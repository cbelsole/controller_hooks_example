import React, { useContext } from 'react';
import { iTodo } from '../api/todos';
import { todoContext } from './todoProvider';

interface Props extends iTodo {}

const Todo: React.FC<Props> = ({ item, done }) => {
  const { completeTodo } = useContext(todoContext);

  return (
    <div>
      task: {item} is {done ? 'done' : 'not done'}{' '}
      {!done && (
        <button type="button" onClick={() => completeTodo(item)}>
          Complete?
        </button>
      )}
    </div>
  );
};

export default Todo;
