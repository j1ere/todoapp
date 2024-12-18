import { useState } from "react";

export default function Form({todos,setTodos}) {
  const [todo, setTodo] = useState("");
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
    </div>
  );
}
