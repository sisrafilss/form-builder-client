import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateFormData } from "../../store/formList";

import Navigation from "../Navigation/Navigation";

const CreateForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Captture id from slug
  const { id } = useParams();

  //   Get form List from store
  const formList = useSelector((state) => state.entities.formList.formList);

  //   Find specific form against id
  const form = formList.find((frm) => frm._id === id);

  //   Create the form
  const generatedForm = generateForm(form);

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const labels = [];
    const values = [];
    for (let i = 0; i < e.target.length - 1; i++) {
      labels.push(e.target[i].name);
      values.push(e.target[i].value);
    }
    const formData = {
      id: form._id,
      labels: labels,
      values: values,
    };
    dispatch(updateFormData(formData));

    // Redirect to the form view page
    const from = `/form/${form._id}`;
    navigate(from, { replace: true });
  };

  return (
    <div>
      <Navigation />
      <div className="container mt-5 ">
        <div className="card shadow">
          <div className="card-header">{form.name}</div>
          <div className="card-body">
            {/* Insert Form Data */}
            <div>
              <form onSubmit={handleSubmit}>
                {generatedForm.map((frm, index) => (
                  <div key={index} className="mb-3">
                    {frm}
                  </div>
                ))}

                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;

// Generate form
const generateForm = (form) => {
  const { fieldTypes, fieldLabels } = form;

  const elements = [];
  const length = fieldTypes.length;

  for (let i = 1; i < length; i++) {
    if (fieldTypes[i] === "Text") {
      elements.push(
        <>
          <label className="mb-2" htmlFor="">
            {fieldLabels[i]}
          </label>
          <input className="form-control" name={fieldLabels[i]} type="text" />
        </>
      );
    } else if (fieldTypes[i] === "Number") {
      elements.push(
        <>
          <label className="mb-2" htmlFor="">
            {fieldLabels[i]}
          </label>
          <input className="form-control" name={fieldLabels[i]} type="number" />
        </>
      );
    } else if (fieldTypes[i] === "Date") {
      elements.push(
        <>
          <label className="mb-2" htmlFor="">
            {fieldLabels[i]}
          </label>
          <input className="form-control" name={fieldLabels[i]} type="date" />
        </>
      );
    } else if (fieldTypes[i] === "Textarea") {
      elements.push(
        <>
          <label className="mb-2" htmlFor="">
            {fieldLabels[i]}
          </label>
          <textarea
            className="form-control"
            name={fieldLabels[i]}
            type="number"
          ></textarea>
        </>
      );
    } else if (fieldTypes[i] === "Email") {
      elements.push(
        <>
          <label className="mb-2" htmlFor="">
            {fieldLabels[i]}
          </label>
          <input className="form-control" name={fieldLabels[i]} type="email" />
        </>
      );
    }
  }

  return elements;
};
