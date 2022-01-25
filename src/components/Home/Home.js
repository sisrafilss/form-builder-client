import React from "react";
import Navigation from "../Navigation/Navigation";

const Home = () => {
  return (
    <>
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
                  <th scope="col">SI.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td className="text-primary">Contact</td>
                  <td>
                    {" "}
                    <button className="btn btn-success btn-sm">
                      Report
                    </button>{" "}
                  </td>
                </tr>

                <tr>
                  <th scope="row">2</th>
                  <td className="text-primary">Result</td>
                  <td>
                    {" "}
                    <button className="btn btn-success btn-sm">
                      Report
                    </button>{" "}
                  </td>
                </tr>

                <tr>
                  <th scope="row">3</th>
                  <td className="text-primary">Accomodation</td>
                  <td>
                    {" "}
                    <button className="btn btn-success btn-sm">
                      Report
                    </button>{" "}
                  </td>
                </tr>
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
    </>
  );
};

export default Home;

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
