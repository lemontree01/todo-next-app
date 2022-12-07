import Todos from "../components/Todos";

const Active = ({ todos, handleToggle }) => (
  <Todos
    todos={todos.filter(({ isDone }) => !isDone)}
    handleToggle={handleToggle}
  />
);

export default Active;
