import styles from "../styles/Layout.module.css";
import { useState } from "react";

const Todo = ({ todo, handleToggle }) => {
  const [isModifying, setIsModifying] = useState(false);
  const [currentValue, setCurrentValue] = useState(todo.value);

  const handleTodoChange = (e) => {
    setCurrentValue(e.target.value);
  };

  const handleDoubleClick = (e) => {
    if (e.detail === 2) {
      setIsModifying(true);
    }
  };

  const handleSubmit = () => {
    handleToggle(todo.id, "edit", currentValue);
    setIsModifying(false);
  };

  return (
    <div className={styles.todo} onClick={handleDoubleClick}>
      <div>Value: {todo.isDone ? "Done" : "Not done"}</div>
      {isModifying ? (
        <input value={currentValue} onChange={handleTodoChange} />
      ) : (
        <div>{todo.value}</div>
      )}
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={() => handleToggle(todo.id, "toggle")}>Toggle</button>
      <button onClick={() => handleToggle(todo.id, "delete")}>Delete</button>
    </div>
  );
};

export default Todo;
