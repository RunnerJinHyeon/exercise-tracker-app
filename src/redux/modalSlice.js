import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  // 리듀서 이름
  name: "modal",
  // 초기값
  initialState: { value: false },
  reducers: {
    openModal: (state, action) => {
      state.value = true;
    },
    closeModal: (state, action) => {
      state.value = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice;
