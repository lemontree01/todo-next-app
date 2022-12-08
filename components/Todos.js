import Todo from "./Todo";

const Todos = ({ todos, handleToggle }) => (
  <div>
    {todos.map((todo) => (
      <Todo key={todo.id} {...{ todo, handleToggle }} />
    ))}
  </div>
);

export default Todos;
