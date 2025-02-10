import { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    const root = document.documentElement;
    const storedTheme = localStorage.getItem("theme");
    
    if (storedTheme) {
      root.setAttribute("data-theme", storedTheme);
    } else {
      root.setAttribute("data-theme", darkMode ? "dark" : "light");
    }
  }, [darkMode]);

  return (
    <div className="py-5" id="app">
      <div className="container">
        <Header />
        <TodoList />
        <div className="d-sm-none shadow">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
