import * as React from 'react';
import { iTodo } from '../api/todos';

interface Props extends iTodo {
  completeTodo: (item: string) => void;
}

const Todo: React.FC<Props> = ({ item, done, completeTodo }) => {
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
