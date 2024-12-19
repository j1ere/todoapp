import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");
  function handleDefault(e) {
    e.preventDefault();
    // console.log(todo);
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <div>
      <form className={styles.todoform} onSubmit={(e) => handleDefault(e)}>
        <div className={styles.inputContainer}>
          <input
            className={styles.mordernInput}
            placeholder="Type here ..."
            type="text"
            onChange={(e) => {
              setTodo(e.target.value);
            }}
            value={todo}
          />
          <button className={styles.mordernButton} type="submit">
            add
          </button>
        </div>
      </form>
    </div>
  );
}
