import Link from "next/link";
import { useRouter } from "next/router";

const Layout = ({
  children,
  currentTodo,
  setCurrentTodo,
  handleKeyDown,
  toggleAllTodos,
  todosLeft,
  clearCompleted,
  allTodosMode,
  todos
}) => {
  const {pathname: currentMode} = useRouter()
  return (
  <div className="main">
    <h1>todos</h1>
    <div className="content">
    <div className="first-row">
      {!!todos.length ? (
        <div className={"arrow-placeholder"} onClick={toggleAllTodos}>
          <div className={`arrow ${allTodosMode && "dark-arrow"}`}></div>
        </div>) :
        (<div>
          <div className={"arrow-placeholder"}>
       
        </div>
          </div>)
        }
        <input
          className="todo-input"
          value={currentTodo}
          onChange={(e) => setCurrentTodo(e.currentTarget.value)}
          onKeyDown={handleKeyDown}
          placeholder={"What needs to be done?"}
        />
      </div>

      <section className="content">{children}</section>
      {!!todos.length && (<footer>
        <div>
          {todosLeft} item{!!(todosLeft - 1) && "s"} left
        </div>
        <div className="links">
        <div className={`link ${currentMode === '/' && 'selected'}`}>
          <Link href="/">All</Link>
        </div>
        <div className={`link ${currentMode === '/completed' && 'selected'}`}>
          <Link href="/completed">Completed</Link>
        </div>
        <div className={`link ${currentMode === '/active' && 'selected'}`}>
          <Link href="/active">Active</Link>
        </div>
        </div>
        {!!todos.filter(todo => todo.isDone).length ? <div className="clear-completed" onClick={clearCompleted}>Clear completed</div> : <div></div>}
      </footer>)}
    </div>
  </div>
)};

export default Layout;
