import Todos from "../components/Todos"

const Completed = ({todos}) => (
  <Todos todos={todos.filter(({isDone})=> isDone)}/>
)

export default Completed