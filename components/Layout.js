import styles from "../styles/Layout.module.css";
import Link from "next/link";

const Layout = ({
  children,
  currentTodo,
  setCurrentTodo,
  handleKeyDown,
  toggleAllTodos,
  todosLeft,
  clearCompleted,
}) => (
  <>
    <div className={styles.header}>todos</div>
    <div className={styles.input}>
      <button onClick={toggleAllTodos}>Toggle</button>
      <input
        value={currentTodo}
        onChange={(e) => setCurrentTodo(e.currentTarget.value)}
        onKeyDown={handleKeyDown}
        placeholder={"What needs to be done?"}
      />
    </div>
    {children}
    Todos Left:{todosLeft}
    <div className={styles.links}>
      <Link href="/">All</Link>
      <Link href="/completed">Completed</Link>
      <Link href="/active">Active</Link>
    </div>
    <button onClick={clearCompleted}>Clear completed</button>
  </>
);

export default Layout;
