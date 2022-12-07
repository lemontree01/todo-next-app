import Todos from "./../components/Todos";

const Home = ({ todos, handleToggle }) => (
  <Todos todos={todos} handleToggle={handleToggle} />
);

export default Home;
