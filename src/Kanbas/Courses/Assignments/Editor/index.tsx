// import React from "react";
// import { useNavigate, useParams, Link } from "react-router-dom";
// import { assignments } from "../../../Database";
// import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setAssignment,
//   addAssignment,
//   updateAssignment,
// } from "../reducer";
// import { KanbasState } from "../../../store";

// function AssignmentEditor() {
//     const dispatch = useDispatch();
//     const { assignmentId } = useParams();
//     const assignment = useSelector(
//         (state: KanbasState) => state.assignmentsReducer.assignment
//       );
//     const { courseId } = useParams();
//     const navigate = useNavigate();
//     const handleSave = () => {
//         if (assignmentId === "new") {
//           dispatch(
//             addAssignment({
//               ...assignment,
//               course: courseId,
//               _id: new Date().getTime().toString(),
//             })
//           );
//         } else {
//           dispatch(updateAssignment({ ...assignment, course: courseId }));
//         }
//         navigate(`/Kanbas/Courses/${courseId}/Assignments`);
//       };
//     return (
//         <div className="gap-3 align-items-center justify-content-end">
//             <div className="d-flex align-items-center justify-content-end"
//                 style={{ marginRight: "20px" }}>
//                 <div>
//                     <FaCheckCircle style={{ color: "green" }} />{" "}
//                     <span className="check-icon">
//                         <b>Published</b>
//                     </span>
//                 </div>
//                 <div className="dropdown" style={{ marginLeft: "10px" }}>
//                     <button
//                         className="btn"
//                         type="button"
//                         data-bs-toggle="dropdown"
//                         aria-expanded="false"
//                         style={{ backgroundColor: "#f5f5f5", border: "1px solid lightgray" }}
//                     >
//                         <FaEllipsisV />
//                     </button>
//                     <ul className="dropdown-menu">
//                         <li>
//                             <a className="dropdown-item" href="#">
//                                 Option 1
//                             </a>
//                         </li>
//                         <li>
//                             <a className="dropdown-item" href="#">
//                                 Option 2
//                             </a>
//                         </li>
//                         <li>
//                             <a className="dropdown-item" href="#">
//                                 Option 3
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>

//             <hr style={{ marginRight: "20px" }} />

//             <div className="row" style={{ marginRight: "20px" }}>
//                 <form>
//                     <div className="mb-3 w-75">
//                         <label className="form-label" htmlFor="assignment-name">Assignment Name</label>
//                         <input type="text" className="form-control" id="assignment-name"
//                             placeholder="Enter Assignment Name" value={assignment?.title} onChange={(e) => dispatch(setAssignment({ ...assignment, title: e.target.value }))} />
//                     </div>
//                     <div className="mb-3 w-75">
//                         <textarea className="form-control"
//                             rows={4}>This is the assignment description.</textarea>
//                     </div>
//                     <div className="mb-3">
//                         <div className="row">
//                             <div className="col-3 text-end">
//                                 <label className="form-label" htmlFor="assignment-points">Points</label>
//                             </div>
//                             <div className="col-5">
//                                 <input className="form-control" id="assignment-points" type="number"
//                                     value="100" />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="mb-3">
//                         <div className="row">
//                             <div className="col-3 text-end">
//                                 <label className="form-label" htmlFor="assignment-group">Assignment Group</label>
//                             </div>
//                             <div className="col-5">
//                                 <select className="form-select" id="assignment-group">
//                                     <option selected>ASSIGNMENTS</option>
//                                     <option>QUIZZES</option>
//                                     <option>EXAMS</option>
//                                     <option>PROJECT</option>
//                                 </select>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="mb-3">
//                         <div className="row">
//                             <div className="col-3 text-end">
//                                 <label className="form-label" htmlFor="display-grade">Display Grade as</label>
//                             </div>
//                             <div className="col-5">
//                                 <select className="form-select" id="display-grade">
//                                     <option selected>Percentage</option>
//                                     <option>GPA</option>
//                                     <option>Grade</option>
//                                 </select>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="mb-4">
//                         <div className="row">
//                             <div className="col-3 text-end"></div>
//                             <div className="col-5">
//                                 <div className="form-check">
//                                     <input className="form-check-input" type="checkbox" value=""
//                                         id="countFinalGrade" />
//                                     <label className="form-check-label" htmlFor="countFinalGrade">
//                                         Do not count this assignment towards the final grade
//                                     </label>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="mb-3">
//                         <div className="row">
//                             <div className="col-3 text-end">
//                                 <label className="form-label" htmlFor="submission-type">Submission Type</label>
//                             </div>
//                             <div className="col-5">
//                                 <div className="border border-secondary-subtle rounded p-3">
//                                     <select className="form-select mb-3" id="submission-type">
//                                         <option selected>Online</option>
//                                         <option>Offline</option>
//                                     </select>

//                                     <div className="mb-2"><b>Online Entry Options</b></div>

//                                     <div className="form-check mb-2">
//                                         <input className="form-check-input" type="checkbox" value=""
//                                             id="textEntry" checked />
//                                         <label className="form-check-label" htmlFor="textEntry">
//                                             Text Entry
//                                         </label>
//                                     </div>

//                                     <div className="form-check mb-2">
//                                         <input className="form-check-input" type="checkbox" value=""
//                                             id="websiteUrl" checked />
//                                         <label className="form-check-label" htmlFor="websiteUrl">
//                                             Website URL
//                                         </label>
//                                     </div>

//                                     <div className="form-check mb-2">
//                                         <input className="form-check-input" type="checkbox" value=""
//                                             id="mediaRec" checked />
//                                         <label className="form-check-label" htmlFor="mediaRec">
//                                             Media Recordings
//                                         </label>
//                                     </div>

//                                     <div className="form-check mb-2">
//                                         <input className="form-check-input" type="checkbox" value=""
//                                             id="studentAnnot" />
//                                         <label className="form-check-label" htmlFor="studentAnnot">
//                                             Student Annotations
//                                         </label>
//                                     </div>

//                                     <div className="form-check mb-2">
//                                         <input className="form-check-input" type="checkbox" value=""
//                                             id="fileUploads" />
//                                         <label className="form-check-label" htmlFor="fileUploads">
//                                             File Uploads
//                                         </label>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="mb-3">
//                         <div className="row">
//                             <div className="col-3 text-end">
//                                 <label className="form-label">Assign</label>
//                             </div>

//                             <div className="col-5">
//                                 <div className="border border-secondary-subtle rounded">
//                                     <div className="mb-3 ps-3 pe-3 pt-3">
//                                         <label htmlFor="assignTo" className="form-label">Assign To</label>
//                                         <input className="form-control" type="text" value="Everyone"
//                                             id="assignTo" />
//                                     </div>

//                                     <div className="mb-3 ps-3 pe-3">
//                                         <label className="form-label" htmlFor="dueDate">Due</label>
//                                         <input type="date" className="form-control" placeholder="" id="dueDate" />
//                                     </div>

//                                     <div className="row ps-3 pe-3">
//                                         <div className="col"><label className="form-label"
//                                             htmlFor="availableFrom">Available From</label>
//                                         </div>
//                                         <div className="col"><label className="form-label" htmlFor="until">Until</label>
//                                         </div>
//                                     </div>

//                                     <div className="row ps-3 pe-3">
//                                         <div className="col">
//                                             <div className="mb-3">
//                                                 <input type="date" className="form-control" placeholder=""
//                                                     id="availableFrom" />
//                                             </div>
//                                         </div>
//                                         <div className="col">
//                                             <div className="mb-3">
//                                                 <input type="date" className="form-control" placeholder=""
//                                                     id="until" />
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="row mt-1">
//                                         <div className="col">
//                                             <button className="btn w-100 assign-add-btn" style={{ backgroundColor: "#f5f5f5", border: "1px solid lightgray" }}><i
//                                                 className="fa-solid fa-plus me-2"></i>Add</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <hr />
//                     <div className="d-flex flex-row gap-1 align-items-center mb-3">
//                         <div className="flex-grow-1">
//                             <div className="form-check">
//                                 <input className="form-check-input" type="checkbox" value="" id="notifyUsers" />
//                                 <label className="form-check-label" htmlFor="notifyUsers" >
//                                     Notify users that this content has changed
//                                 </label>
//                             </div>
//                         </div>
//                         <div>
//                             <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
//                                 className="btn" style={{ backgroundColor: "#f5f5f5", border: "1px solid lightgray" }}>Cancel</Link>
//                             <button onClick={handleSave} className="btn btn-danger ms-2 float-end">
//                                 Save
//                             </button>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }
// export default AssignmentEditor;

//COMMENTED PREVIOUS SUBMISSION AS LOT OF CHANGES TO THE JSON FORMAT

import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setAssignment,
  addAssignment,
  updateAssignment,
} from "../reducer";
import { KanbasState } from "../../../store";

function AssignmentEditor() {
  const assignment = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignment
  );
  const dispatch = useDispatch();
  const { assignmentId } = useParams();
const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    if (assignmentId === "new") {
      dispatch(
        addAssignment({
          ...assignment,
          course: courseId,
          _id: new Date().getTime().toString(),
        })
      );
    } else {
      dispatch(updateAssignment({ ...assignment, course: courseId }));
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  const aFrom = assignment.availableFromDate;
  const aUntil = assignment.availableUntilDate;
  return (
    <div className="me-5">
      <div className="wd-kanbas-green float-end mt-2 ">
        <i
          className="fa fa-check-circle wd-kanbas-green"
          aria-hidden="true"
        ></i>
        Published
        <button type="button" className="btn btn-light">
          <i className="fa fa-ellipsis-v ms-2"></i>
        </button>
      </div>
      <br />
      <br />
      <hr />
      <label htmlFor="input-1" className="form-label">
        {" "}
        Assignment Name{" "}
      </label>
      <input
        value={assignment?.title}
        className="form-control mb-2"
        onChange={(e) =>
          dispatch(setAssignment({ ...assignment, title: e.target.value }))
        }
      />
      <br />
      <textarea
        value={assignment.description}
        className="form-control"
        onChange={(e) =>
          dispatch(
            setAssignment({ ...assignment, description: e.target.value })
          )
        }
      ></textarea>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-2">
            <div className="float-end">Points</div>
          </div>
          <div className="col-8">
            <input
              className="form-control"
              id="input-2"
              value={assignment.points}
              onChange={(e) =>
                dispatch(
                  setAssignment({ ...assignment, points: e.target.value })
                )
              }
            />
          </div>
          <div className="col-2"></div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-2">
            <div className="float-end">Assign</div>
          </div>
          <div className="col-8">
            <ul className="list-group list-group-item wd-kanbas-edit-section">
              <li className="list-group-item border-0">
                <b>Due</b>
              </li>

              <li className="list-group-item border-0">
                <input
                  type="date"
                  className="form-control"
                  id="input-4"
                  value={assignment.dueDate}
                  onChange={(e) =>
                    dispatch(
                      setAssignment({ ...assignment, dueDate: e.target.value })
                    )
                  }
                />
              </li>
              <li className="list-group-item border-0">
                <div className="row">
                  <div className="col-6 float-start">
                    <b className="wd-kanbas-width-45">Available from</b>
                  </div>
                  <div className="col-6 wd-float-start">
                    <b className="wd-kanbas-width-45">Until</b>
                  </div>
                </div>
              </li>

              <li className="list-group-item border-0">
                <div className="row">
                  <div className="col-6 float-start">
                    <input
                      type="date"
                      className="form-control float-start wd-kanbas-width-45 me-1"
                      id="input-5"
                      value={aFrom}
                      onChange={(e) =>
                        dispatch(
                          setAssignment({
                            ...assignment,
                            availableFromDate: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                  <div className="col-6 float-start">
                    <input
                      type="date"
                      className="form-control float-start wd-kanbas-width-45 ms-1"
                      id="input-6"
                      value={aUntil}
                      onChange={(e) =>
                        dispatch(
                          setAssignment({
                            ...assignment,
                            availableUntilDate: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-2"></div>
        </div>
      </div>

      <hr />

      <div className="float-start">
        <input className="form-check-input" type="checkbox" id="check-9" />
        <label className="form-check-label" htmlFor="check-9">
          Notify users that this content has changed
        </label>
      </div>
      <button onClick={handleSave} className="btn btn-success ms-2 float-end">
        Save
      </button>
      <Link
        to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-danger float-end"
      >
        Cancel
      </Link>
    </div>
  );
}
export default AssignmentEditor;