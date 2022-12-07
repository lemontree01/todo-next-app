import styles from '../styles/Layout.module.css'
import Todo from './Todo'

const Todos = ( {todos, handleToggle} ) => (
  <div className={styles.todos}>
    {todos.map(todo => <Todo key={todo.id} {...{todo, handleToggle}}/>)}
  </div>
)

export default Todos