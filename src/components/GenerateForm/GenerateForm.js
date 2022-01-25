import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";

const GenerateForm = () => {
  const [form, setForm] = useState([
    <>
      <label htmlFor="formName" className="mb-2">
        Form Name
      </label>
      <input type="text" name="formName" className="form-control" />
    </>,
  ]);

  const handleGenerateField = (name) => {
    setForm([
      ...form,
      <>
        <label className="mb-2">{name}</label>
        <input type="text" name={name} className="form-control" />
      </>,
    ]);
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    for (let i = 0; i < e.target.length - 1; i++) {
      console.log(e.target[i].name, e.target[i].value);
    }
  };

  return (
    <>
      <Navigation />
      <div className="container mt-5">
        <div className="d-flex justify-content-between">
          <div>
            <form onSubmit={handleGenerate}>
              {form.map((element, index) => (
                <div key={index} className="mb-3">
                  {element}
                </div>
              ))}
              {form.length > 1 ? (
                <button type="submit" className="btn btn-success">
                  Generate
                </button>
              ) : (
                ""
              )}
            </form>
          </div>
          <div>
            <button
              onClick={() => handleGenerateField("Text")}
              className="btn btn-success d-block mb-2"
            >
              Text
            </button>
            <button
              onClick={() => handleGenerateField("Number")}
              className="btn btn-success d-block mb-2"
            >
              Number
            </button>
            <button
              onClick={() => handleGenerateField("Date")}
              className="btn btn-success d-block mb-2"
            >
              Date
            </button>
            <button
              onClick={() => handleGenerateField("Textarea")}
              className="btn btn-success d-block mb-2"
            >
              Text Area
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GenerateForm;
