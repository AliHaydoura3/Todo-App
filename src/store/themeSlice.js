import { createSlice } from "@reduxjs/toolkit";
import { loadState, saveState } from "../utils/localStorage";

const persistedState = loadState();

const initialState = persistedState?.theme || {
  darkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      const root = document.documentElement;
      const currentTheme = root.getAttribute("data-theme");
      const newTheme = currentTheme === "light" ? "dark" : "light";
      root.setAttribute("data-theme", newTheme);
      saveState({ ...loadState(), theme: state });
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
