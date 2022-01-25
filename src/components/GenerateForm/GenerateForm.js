import React from "react";
import Navigation from "../Navigation/Navigation";

const GenerateForm = () => {
  return (
    <>
      <Navigation />
      <div className="container mt-5">
        <div className="d-flex justify-content-between">
          <div>
            <form>
              <div>
                <label htmlFor="formName" className="mb-2">
                  Form Name
                </label>
                <input type="text" className="form-control" />
              </div>
            </form>
          </div>
          <div>
            <button className="btn btn-success d-block mb-2">Text</button>
            <button className="btn btn-success d-block mb-2">Number</button>
            <button className="btn btn-success d-block mb-2">Date</button>
            <button className="btn btn-success d-block mb-2">Text Area</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GenerateForm;
