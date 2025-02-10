import { useDispatch, useSelector } from "react-redux";
import { switchStatus } from "../store/todosSlice";

import "./Footer.css";

const Footer = () => {
  const dispatch = useDispatch();
  const currentStatus = useSelector((state) => state.todos.displayStatus);

  const handleSwitchStatus = (status) => {
    dispatch(switchStatus(status));
  };

  return (
    <div
      className="py-3 py-sm-0 mt-4 mt-sm-0 rounded-2 d-flex justify-content-center align-items-center gap-4 fw-bold footer"
      style={{
        background: "var(--todo-background)",
        color: "var(--footer)",
        border: "none",
        fontSize: "1rem",
      }}
    >
      {["all", "active", "completed"].map((status) => (
        <span
          key={status}
          data-status={status}
          className={currentStatus === status ? "active" : ""}
          onClick={() => handleSwitchStatus(status)}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      ))}
    </div>
  );
};

export default Footer;
