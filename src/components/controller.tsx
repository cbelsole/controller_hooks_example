import * as React from 'react';
import { getTodos, completeTodo as completeTodoAPI, iTodo } from '../api/todos';
import TodoList from './todoList';

interface Props {}
interface State {
  todos: iTodo[];
}

export default class Controller extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { todos: [] };
  }

  componentDidMount() {
    getTodos().then(todos => this.setState({ todos }));
  }

  completeTodo = (item: string) => {
    completeTodoAPI(item).then(todos => this.setState({ todos }));
  };

  render() {
    const { todos } = this.state;

    if (!todos) {
      return <div>loading...</div>;
    }

    return (
      <div>
        <TodoList completeTodo={this.completeTodo} todos={todos} />
      </div>
    );
  }
}
