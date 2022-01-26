import React, { useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { loadFormList } from "../../store/formList";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFormList());
  }, [dispatch]);

  const formList = useSelector((state) => state.entities.formList.formList);

  // handle Search
  const handleOnChange = (e) => {
    console.log(e.target.value);
  };
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
                  <input
                    type="number"
                    defaultValue={10}
                    style={{ width: "40px" }}
                  />
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
                    onChange={handleOnChange}
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
                {formList.length &&
                  formList.map((frm, index) => (
                    <tr key={index}>
                      <th scope="row">{++index}</th>
                      <td>
                        <Link
                          className="text-primary text-decoration-none"
                          to={`/home/${frm._id}`}
                        >
                          {frm.name}
                        </Link>
                      </td>
                      <td>
                        <Link
                          to={`/form/${frm._id}`}
                          className="btn btn-success btn-sm"
                        >
                          Report
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {/* Table Data Count and Pagination */}
            <div className="d-flex justify-content-between mt-3">
              <div>
                <p>
                  Showing {formList.length ? 1 : 0} to {formList.length} of{" "}
                  {formList.length} entries
                </p>
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
