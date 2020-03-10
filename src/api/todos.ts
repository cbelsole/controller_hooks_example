export interface iTodo {
  item: string;
  done: boolean;
}

let todos: iTodo[] = [
  { item: 'Do the laundry', done: false },
  { item: 'Wash the dishes', done: false },
  { item: 'Clean the floors', done: false },
  { item: 'Go grocery shopping', done: true },
];

export function getTodos(): Promise<iTodo[]> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(todos);
    }, 2000);
  });
}

export function completeTodo(item: string): Promise<iTodo[]> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      todos = todos.map(todo =>
        todo.item === item ? { item: item, done: true } : todo
      );

      res(todos);
    }, 1000);
  });
}
