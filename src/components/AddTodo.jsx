import { useDispatch } from "react-redux";
import { addTodo } from "../store/todosSlice";
import "./AddTodo.css";

const AddTodo = () => {
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    const input = document.getElementById("text");
    const text = input.value.trim();
    if (text === "") return;
    input.value = "";
    dispatch(addTodo({ id: crypto.randomUUID(), text, completed: false }));
  };

  return (
    <form className="position-relative mt-5 shadow" onSubmit={handleAddTodo}>
      <span
        className="rounded-circle position-absolute top-50 start-0 translate-middle-y ms-4 mt-0"
        style={{
          display: "block",
          background: "transparent",
          width: "25px",
          height: "25px",
          border: "1px solid var(--border)",
        }}
      ></span>
      <input
        id="text"
        type="text"
        placeholder="Create a new todo..."
        className="form-control py-3"
        style={{
          background: "var(--todo-background)",
          color: "var(--add-todo-color)",
          border: "none",
          boxShadow: "none",
          paddingLeft: "69px",
        }}
      />
    </form>
  );
};

export default AddTodo;
