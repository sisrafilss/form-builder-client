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
      state.formList.push(action.payload);
    },
    setUpdateFormData: (state, action) => {
      // console.log(action.payload);
      const id = action.payload._id;
      const index = state.formList.findIndex((form) => form._id === id);

      if (state.formList[index].formData) {
        console.log(action.payload.values);
        state.formList[index].formData.values.push(action.payload.values);
      } else {
        state.formList[index].formData = {
          labels: action.payload.labels,
          values: [action.payload.values],
        };
      }
      // if (result.formData) {
      //   result.formData.values.push(action.payload.values);
      // } else {
      //   result.formData = {
      //     labels: action.payload.labels,
      //     values: [action.payload.values],
      //   };
      // }
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

export const {
  loadFormSuccess,
  setFormData,
  setFormDelete,
  setUpdateFormData,
} = formList.actions;

export default formList.reducer;

// Action Creator
const url = "/form-list";

// Save new form
export const saveNewForm = (data) =>
  apiCallBegan({
    url,
    method: "post",
    data,
    onSuccess: setFormData.type,
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
    onSuccess: setUpdateFormData.type,
  });

// Handle Delete
export const deleteForm = (id) =>
  apiCallBegan({
    url: `${url}/${id}`,
    method: "delete",
    onSuccess: setFormDelete.type,
  });
