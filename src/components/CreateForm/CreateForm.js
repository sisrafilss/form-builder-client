import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Navigation from "../Navigation/Navigation";

const CreateForm = () => {
  // Captture id from slug
  const { id } = useParams();

  //   Get form List from store
  const formList = useSelector((state) => state.entities.formList.formList);

  //   Find specific form against id
  const form = formList.find((frm) => frm._id === id);

  //   Create the form
  const generatedForm = generateForm(form);

  return (
    <div>
      <Navigation />
      <div className="container mt-5 ">
        <div className="card shadow">
          <div className="card-header">{form.name}</div>
          <div className="card-body">
            {/* Insert Form Data */}
            <div>
              <form>
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
          <input className="form-control" type="text" />
        </>
      );
    } else if (fieldTypes[i] === "Number") {
      elements.push(
        <>
          <label className="mb-2" htmlFor="">
            {fieldLabels[i]}
          </label>
          <input className="form-control" type="number" />
        </>
      );
    } else if (fieldTypes[i] === "Date") {
      elements.push(
        <>
          <label className="mb-2" htmlFor="">
            {fieldLabels[i]}
          </label>
          <input className="form-control" type="date" />
        </>
      );
    } else if (fieldTypes[i] === "Textarea") {
      elements.push(
        <>
          <label className="mb-2" htmlFor="">
            {fieldLabels[i]}
          </label>
          <textarea className="form-control" type="number"></textarea>
        </>
      );
    } else if (fieldTypes[i] === "Email") {
      elements.push(
        <>
          <label className="mb-2" htmlFor="">
            {fieldLabels[i]}
          </label>
          <input className="form-control" type="email" />
        </>
      );
    }
  }

  return elements;
};
