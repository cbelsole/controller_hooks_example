import React from 'react';
import Controller from './components/controller';
import TodoProvider from './components/todoProvider';

function App() {
  return (
    <div>
      <TodoProvider>
        <Controller />
      </TodoProvider>
    </div>
  );
}

export default App;
