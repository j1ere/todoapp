import { useState } from "react";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function handleDefault(e) {
    e.preventDefault();
    // console.log(todo);
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <div>
      <form onSubmit={(e) => handleDefault(e)}>
        <input
          type="text"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          value={todo}
        />
        <button type="submit">add</button>
      </form>
      {console.log(todos)}
      {todos.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </div>
  );
}
