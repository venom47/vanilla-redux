import { configureStore, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "toDoReducer",
  initialState: [],
  reducers: {
    addToDo: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    deleteToDo: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

const store = configureStore({ reducer: slice.reducer });

export const { addToDo, deleteToDo } = slice.actions;

export default store;
