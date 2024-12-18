import TodoItem from "./TodoItem";
export default function TodoList({todos}) {
  return (
    <div>
      {console.log(todos)}
      {todos.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </div>
  );
}
