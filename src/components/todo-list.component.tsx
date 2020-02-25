import React from "react";
import { useStore } from "../App";
import { useObserver } from 'mobx-react';
import { TodoItemComponent } from "./todo-item.component";

export function TodoListComponent() {
    const todoList = useStore();

    return useObserver(() => (
        <div className="todo-list">
            <div className="open-todos">
                <span>Open Todos</span>
                {todoList.openTodos.map(todo => <TodoItemComponent key={`${todo.id}-${todo.text}`} todo={todo} />)}
            </div>
            <div className="finished-todos">
                <span>Finished Todos</span>
                {todoList.finishedTodos.map(todo => <TodoItemComponent key={`${todo.id}-${todo.text}`} todo={todo} />)}
            </div>
        </div>
    ));
}