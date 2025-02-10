import { makeComplete, removeTodo } from "../store/todosSlice";
import { useDispatch } from "react-redux";
import checkIcon from "../images/icon-check.svg";
import crossIcon from "../images/icon-cross.svg";
import "./TodoItem.css";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(makeComplete(todo.id));
  };

  const handleRemove = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <li
      className={`${
        todo.completed && "text-decoration-line-through"
      } list-group-item py-3`}
      style={{
        background: "var(--todo-background)",
        color: todo.completed
          ? "var(--completed-todo)"
          : "var(--add-todo-color)",
        border: "none",
        borderBottom: "1px solid var(--border)",
        paddingRight: "69px",
        paddingLeft: "69px",
        overflow: "hidden",
      }}
    >
      <span
        className={`${
          todo.completed && "active"
        } checkbox rounded-circle position-absolute top-50 start-0 translate-middle-y ms-4 mt-0 d-flex justify-content-center align-items-center`}
        style={{
          display: "block",
          background: "transparent",
          width: "25px",
          height: "25px",
          border: "1px solid var(--border)",
        }}
        onClick={handleCheck}
      >
        {todo.completed && <img src={checkIcon} alt="" />}
      </span>
      {todo.text}
      <img
        src={crossIcon}
        onClick={handleRemove}
        className="cross position-absolute top-50 end-0 translate-middle-y me-4"
      />
    </li>
  );
};

export default TodoItem;
