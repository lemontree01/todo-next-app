import styles from '../styles/Layout.module.css'

const Todo = ( {todo, handleToggle} ) => (
  <div className={styles.todo}>
    New todo:{todo.value}
    Value: {todo.isDone ? 'Done' : 'Not done'}
    <button onClick={()=>handleToggle(todo.id)}>Toggle</button>
  </div>
)

export default Todo