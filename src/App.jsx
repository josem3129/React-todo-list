import { NewTodoFrom } from "./NewTodoForm";
import "./styles.css";
import { useEffect, useState } from "react";
import { TodoList } from "./TodoList";
export default function App() {
  const [todos, setTodos] = useState(() => {

    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) {
      return [];
    }
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodo) => {
      return currentTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }
  function toggleDelete(id) {
    setTodos((currentTodo) => {
      return currentTodo.filter((todo) => todo.id !== id);
    });
  }
  return (
    <>
      <NewTodoFrom onSubmit={addTodo} />
      <h1 className="header">Todo list</h1>
      <TodoList
        todos={todos}
        toggleDelete={toggleDelete}
        toggleTodo={toggleTodo}
      />
    </>
  );
}
