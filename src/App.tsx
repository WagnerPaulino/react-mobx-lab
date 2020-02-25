import React, { useContext } from 'react';
import './App.css';

import { createContext } from 'react';
import { TodoList } from "./todo-list";
import { TodoNewComponent } from './components/todo-new.component';
import { TodoListComponent } from './components/todo-list.component';

export const StoreContext = createContext<TodoList>({} as TodoList);
export const StoreProvider = StoreContext.Provider;

const todoList = new TodoList([
  'Should Starting Writing in React',
  'Should Learn MobX',
  'Should Watch Once Piece :)'
]);

export const useStore = (): TodoList => useContext(StoreContext);


function App() {
  return (
    <StoreProvider value={todoList}>
      <TodoNewComponent />
      <TodoListComponent />
    </StoreProvider>
  );
}

export default App;
