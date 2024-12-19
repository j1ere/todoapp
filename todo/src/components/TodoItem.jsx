import styles from "./todoitem.module.css";

export default function TodoItem({item, todos, setTodos}) {
  function handleDelete(item) {
    console.log("delete buttton clicked for item", item);
    setTodos(todos.filter((todo) => todo !== item))
   
  }
  return (
    <div className={styles.item}>
      <div className={styles.itemname}>
        {item}
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            X
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
