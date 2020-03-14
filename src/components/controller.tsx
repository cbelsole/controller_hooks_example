import * as React from 'react';
import { getTodos, completeTodo as completeTodoAPI, iTodo } from '../api/todos';
import TodoList from './todoList';

interface Props {}
interface State {
  todos: iTodo[];
}

const Controller: React.FunctionComponent = () =>  {
  constructor(props: Props) {
    super(props);
    this.state = { todos: [] };
  }

  componentDidMount() {
    getTodos().then(todos => this.setState({ todos }));
  }

  const completeTodo = (item: string) => {
    completeTodoAPI(item).then(todos => this.setState({ todos }));
  };

  const isAllComplete = () => {
    const { todos } = this.state;

    for (let i = 0; i < todos.length; i++) {
      if (!todos[i].done) {
        alert('Todos are not complete.');
        return;
      }
    }

    alert('Todos are complete.');
  };

  const { todos } = this.state;

  if (!todos.length) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <TodoList completeTodo={completeTodo} todos={todos} />
      <button onClick={isAllComplete}>All complete?</button>
    </div>
  );

}

export default Controller;
