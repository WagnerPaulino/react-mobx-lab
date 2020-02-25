import React, { useState } from "react";
import { useStore } from "../App";

export const TodoNewComponent = () => {
    const [newTodo, setTodo] = useState('');
    const todoList = useStore();

    const addTodo = () => {
        todoList.addTodo(newTodo);
        setTodo('');
    };

    return (
        <div className="todo-new">
            <input type="text" value={newTodo} onChange={(e) => setTodo(e.target.value)} />
            <button onClick={addTodo}>Add Todo</button>
        </div>
    )
}