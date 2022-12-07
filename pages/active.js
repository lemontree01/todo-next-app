import Todos from "../components/Todos"

const Active = ({todos}) => (
  <Todos todos={todos.filter(({isDone})=> !isDone)}/>
)

export default Active