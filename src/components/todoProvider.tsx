import React, { createContext, useState } from 'react';
import {
  getTodos as getTodosAPI,
  completeTodo as completeTodoAPI,
  iTodo,
} from '../api/todos';

interface iTodoContext {
  todos: iTodo[];
  completeTodo: (item: string) => void;
  getTodos: () => void;
}

interface TodoProviderProps {
  children?: React.ReactNode;
}

export const todoContext = createContext<iTodoContext>({
  todos: [],
  completeTodo: () => {},
  getTodos: () => {},
});

const TodoProvider: React.FunctionComponent = ({
  children,
}: TodoProviderProps) => {
  const [todos, setTodos] = useState<iTodo[]>([]);

  const getTodos = () => getTodosAPI().then(todos => setTodos(todos));

  const completeTodo = (item: string) =>
    completeTodoAPI(item).then(todos => setTodos(todos));

  return (
    <todoContext.Provider value={{ todos, completeTodo, getTodos }}>
      {children}
    </todoContext.Provider>
  );
};

export default TodoProvider;
