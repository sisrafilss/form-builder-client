import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const initialState = {
  formList: [],
};

const formList = createSlice({
  name: "formList",
  initialState,
  reducers: {
    loadFormSuccess: (state, action) => {
      state.formList = action.payload;
    },
    setFormData: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { loadFormSuccess, setFormData } = formList.actions;

export default formList.reducer;

// Action Creator
const url = "/form-list";

export const saveNewForm = (data) =>
  apiCallBegan({
    url,
    method: "post",
    data,
  });

export const loadFormList = () =>
  apiCallBegan({
    url,
    onSuccess: loadFormSuccess.type,
  });

export const updateFormData = (data) =>
  apiCallBegan({
    url,
    method: "put",
    data,
    onSuccess: setFormData.type,
  });
