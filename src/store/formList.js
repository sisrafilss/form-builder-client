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
      // console.log(action.payload);
    },
    setFormDelete: (state, action) => {
      // console.log(action.payload);
      if (action.payload.deletedCount > 0) {
        const index = state.formList.findIndex(
          (form) => form._id === action.payload._id
        );
        state.formList.splice(index, 1);
        // console.log(index);
      }
    },
  },
});

export const { loadFormSuccess, setFormData, setFormDelete } = formList.actions;

export default formList.reducer;

// Action Creator
const url = "/form-list";

// Save new form
export const saveNewForm = (data) =>
  apiCallBegan({
    url,
    method: "post",
    data,
  });

// Load form List
export const loadFormList = () =>
  apiCallBegan({
    url,
    onSuccess: loadFormSuccess.type,
  });

// Hanlde update form data
export const updateFormData = (data) =>
  apiCallBegan({
    url,
    method: "put",
    data,
    onSuccess: setFormData.type,
  });

// Handle Delete
export const deleteForm = (id) =>
  apiCallBegan({
    url: `${url}/${id}`,
    method: "delete",
    onSuccess: setFormDelete.type,
  });
