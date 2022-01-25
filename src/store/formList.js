import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formList: [],
};

const formList = createSlice({
  name: "formList",
  initialState,
  reducers: {
    setFormList: (state, action) => {
      state.formList = action.payload;
      // console.log(action.payload);
    },
  },
});

export const { setFormList } = formList.actions;

export default formList.reducer;
