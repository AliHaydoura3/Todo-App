import { createSlice } from "@reduxjs/toolkit";
import { loadState, saveState } from "../utils/localStorage";

const persistedState = loadState();

const initialState = persistedState?.todos || {
  todos: [],
  displayStatus: "all",
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      saveState({ ...loadState(), todos: state });
    },
    makeComplete: (state, action) => {
      const targetTodo = state.todos.find((todo) => todo.id === action.payload);
      targetTodo.completed = !targetTodo.completed;
      saveState({ ...loadState(), todos: state });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      saveState({ ...loadState(), todos: state });
    },
    removeCompletedTodos: (state) => {
      state.todos = state.todos.filter((todo) => todo.completed === false);
      saveState({ ...loadState(), todos: state });
    },
    switchStatus: (state, action) => {
      state.displayStatus = action.payload;
      saveState({ ...loadState(), todos: state });
    },
  },
});

export const {
  addTodo,
  makeComplete,
  removeTodo,
  removeCompletedTodos,
  switchStatus,
} = todosSlice.actions;
export default todosSlice.reducer;
