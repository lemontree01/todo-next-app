import { useState } from "react";

const Todo = ({ todo, handleToggle }) => {
  const [isModifying, setIsModifying] = useState(false);
  const [currentValue, setCurrentValue] = useState(todo.value);
  const [isHovered, setIsHovered] = useState(false);

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
    <div
      className={"todo"}
      onMouseOver={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      onClick={handleDoubleClick}
    >
      <div className="mark" onClick={() => handleToggle(todo.id, "toggle")}>
        <div className={`circle ${todo.isDone && "active"}`}>
          {todo.isDone && <>&#10003;</>}
        </div>
      </div>
      {isModifying ? (
        <input
          onBlur={handleSubmit}
          value={currentValue}
          onChange={handleTodoChange}
        />
      ) : (
        <div className={`todo-text ${todo.isDone && "crossed"}`}>
          {todo.value}
        </div>
      )}
      {isHovered && (
        <div
          onClick={() => handleToggle(todo.id, "delete")}
          className={"delete"}
        >
          &#10005;
        </div>
      )}
    </div>
  );
};

export default Todo;
