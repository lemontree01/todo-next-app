import styles from "../styles/Layout.module.css";
import Link from "next/link";

const Layout = ({ children, currentTodo, setCurrentTodo, handleKeyDown }) => (
  <>
    <div className={styles.header}>todos</div>
    <div className={styles.input}>
      <input value={currentTodo} 
      onChange={e=>setCurrentTodo(e.currentTarget.value)} 
      onKeyDown={handleKeyDown}
      placeholder={'What needs to be done?'}
      />
    </div>
    {children}
    <div className={styles.links}>
      <Link href='/'>All</Link>
      <Link href='/completed'>Completed</Link>
      <Link href='/active'>Active</Link>
    </div>
  </>
);

export default Layout;
