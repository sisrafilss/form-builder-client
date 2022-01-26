import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import { loadFormList } from "../store/formList";

const FormView = () => {
  // Captture id from slug
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFormList());
  }, [dispatch]);

  //   Get form List from store
  const formList = useSelector((state) => state.entities.formList.formList);

  //   Find specific form against id
  const form = formList.find((frm) => frm._id === id);

  const { labels, values } = form.formData;
  console.log(labels);
  console.log(values);

  return (
    <div>
      <Navigation />
      <div className="container mt-5">
        <div className="card shadow">
          <div className="card-header">Form List</div>
          <div className="card-body">
            <div className="d-flex justify-content-between my-3">
              {/* Select Amount of Data to Dispaly */}
              <div>
                <div>
                  <span>Show </span>
                  <select
                    className="p-1 d-inline"
                    aria-label="Default select example"
                  >
                    <option value="1">10</option>
                    {/* <option value="2">Two</option>
                    <option value="3">Three</option> */}
                  </select>
                  <span> entries</span>
                </div>
              </div>

              {/* Search Field */}
              <div>
                <form className="d-flex">
                  <label htmlFor="search" className="form-label mt-2 me-2">
                    Search:
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
              </div>
            </div>

            {/* Generated Form Table */}
            <table className="table table-striped">
              <thead>
                <tr>
                  {labels.map((label, index) => (
                    <th key={index} scope="col">
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {values.map((value, index) => (
                  <tr key={index}>
                    {value.map((val, indx) => (
                      <td key={indx}>{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Table Data Count and Pagination */}
            <div className="d-flex justify-content-between mt-3">
              <div>
                <p>Showing 1 to 3 of 3 entries</p>
              </div>

              {/* Table Data Pagination */}
              <div>
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <span
                        style={style.cursorPointer}
                        className="page-link text-secondary"
                      >
                        Previous
                      </span>
                    </li>
                    <li className="page-item">
                      <span style={style.activePage} className="page-link px-3">
                        1
                      </span>
                    </li>

                    <li className="page-item">
                      <span
                        style={style.cursorPointer}
                        className="page-link text-secondary"
                      >
                        Next
                      </span>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormView;

const style = {
  activePage: {
    backgroundColor: "#0d6efd",
    color: "#fff",
    cursor: "pointer",
  },
  cursorPointer: {
    cursor: "pointer",
  },
};
