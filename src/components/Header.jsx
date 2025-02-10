import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../store/themeSlice";
import AddTodo from "./AddTodo";
import sunIcon from "../images/icon-sun.svg";
import moonIcon from "../images/icon-moon.svg";

const Header = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleTogglingDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <span
          className="h1"
          style={{ color: "hsl(0, 0%, 98%)", letterSpacing: "0.6rem" }}
        >
          TODO
        </span>
        <img
          src={darkMode ? sunIcon : moonIcon}
          alt="toggleDarkMode"
          style={{ cursor: "pointer" }}
          onClick={handleTogglingDarkMode}
        />
      </div>
      <AddTodo />
    </div>
  );
};

export default Header;
