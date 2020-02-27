import React, { useContext, createContext } from 'react';
import './App.css';
import { TodoList } from "./todo-list";
import { TodoNewComponent } from './components/todo-new.component';
import { TodoListComponent } from './components/todo-list.component';

export const StoreContext = createContext<TodoList>({} as TodoList);
export const StoreProvider = StoreContext.Provider;

const todoList = new TodoList([
  'Começar a aprender React',
  'Começar a aprender MobX',
  'Começar a assistir Nanatsu no Taizai :)'
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
