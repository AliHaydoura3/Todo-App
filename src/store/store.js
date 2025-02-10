import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import todoReducer from "./todosSlice";
import { loadState } from "../utils/localStorage";

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    todos: todoReducer,
  },
  preloadedState,
});
