import Todos from "../components/Todos";

const Completed = ({ todos, handleToggle }) => (
  <Todos
    todos={todos.filter(({ isDone }) => isDone)}
    handleToggle={handleToggle}
  />
);

export default Completed;
