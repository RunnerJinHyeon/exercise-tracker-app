import { createSlice } from "@reduxjs/toolkit";

export const routineSlice = createSlice({
  name: "routine",
  initialState: { value: [] },
  reducers: {
    addRoutine: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    deleteRoutine: (state, action) => {
      const id = action.payload;
      state.value = state.value.filter((ele) => ele.id !== id);
    },
  },
});
export const { addRoutine, deleteRoutine } = routineSlice.actions;
export default routineSlice;
