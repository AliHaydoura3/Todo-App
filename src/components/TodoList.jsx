import { useSelector, useDispatch } from "react-redux";
import { removeCompletedTodos } from "../store/todosSlice.js";
import TodoItem from "./TodoItem.jsx";
import Footer from "./Footer.jsx";
import "./TodoList.css";

const TodoList = () => {
  const dispatch = useDispatch();
  const displayStatus = useSelector((state) => state.todos.displayStatus);
  const todos = useSelector((state) => state.todos.todos);
  const activeTodos = todos.filter((todo) => todo.completed === false);
  const completedTodos = todos.filter((todo) => todo.completed === true);
  let displayTodos = [];

  if (displayStatus === "all") {
    displayTodos = todos;
  } else if (displayStatus === "completed") {
    displayTodos = completedTodos;
  } else if (displayStatus === "active") {
    displayTodos = activeTodos;
  }

  const handleRemoveCompleted = () => {
    dispatch(removeCompletedTodos());
  };

  return (
    <ul className="list-group mt-4 shadow">
      {displayTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <li
        className="list-group-item d-flex justify-content-between align-items-center px-4 py-3"
        style={{
          background: "var(--todo-background)",
          color: "var(--footer)",
          border: "none",
          fontSize: "0.9rem",
        }}
      >
        <span>{activeTodos.length} items left</span>
        <div className="d-none d-sm-block">
          <Footer />
        </div>
        <span className="hover-color" onClick={handleRemoveCompleted}>
          Clear Completed
        </span>
      </li>
    </ul>
  );
};

export default TodoList;
