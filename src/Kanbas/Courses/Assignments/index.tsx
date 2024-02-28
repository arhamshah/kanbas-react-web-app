import React from "react";
import { FaCaretDown, FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import './index.css';
import { TbGripVertical } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";

function Assignments() {
    const { courseId } = useParams();
    const assignmentList = assignments.filter(
        (assignment) => assignment.course === courseId);
        
    return (
        <>
            <div className="d-flex gap-1" style={{ marginRight: "20px", marginTop: "20px"}}>
                <div className="me-auto w-25"><input type="text" className="form-control"
                    placeholder="Search for Assignment" /></div>
                <button type="button" className="btn" style={{ backgroundColor: "#f5f5f5", border: "1px solid lightgray" }}><i className="fa-solid fa-plus"></i>
                <FaPlus /> Group</button>
                <button type="button" className="btn btn-danger"><FaPlus /> Assignment</button>
                <div className="dropdown">
                    <button className="btn" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false" style={{ backgroundColor: "#f5f5f5", border: "1px solid lightgray" }}>
                        <FaEllipsisV />
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Option 1</a></li>
                        <li><a className="dropdown-item" href="#">Option 2</a></li>
                        <li><a className="dropdown-item" href="#">Option 3</a></li>
                    </ul>
                </div>
            </div>

            <div className="row" style={{ marginTop: "10px", marginRight: "20px" }}>
                <hr />
            </div>

            <ul className="list-group square-list-group mb-3" style={{marginRight: "20px"}}>
                <li className="list-group-item list-group-item" style={{ backgroundColor: "#f5f5f5", border: "1px solid lightgray" }}>
                    <div className="d-flex justify-content-start align-items-center">
                        <TbGripVertical className="me-2" />
                        <FaCaretDown className="me-2" />
                        <div className="assignment-title flex-grow-1">Assignments</div>
                        <small className="border border-black rounded-pill p-1 me-3">40% of Total</small>
                        <FaPlusCircle className="me-3" />
                        <FaEllipsisV className="fa-lg" />
                    </div>
                </li>

                {assignmentList.map((assignment) => (
                    <li className="list-group-item assignment-border" key={assignment._id}>
                        <div className="d-flex justify-content-start align-items-center">
                            <TbGripVertical className="me-2" />
                            <i className="fa-solid fa-file-pen assignment-item-icon fa-lg p-3"></i>
                            <div className="assignment-item flex-grow-1">
                                <div className="d-flex flex-column">
                                    <div className="assignment-item">
                                        <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                                            {assignment.title}
                                        </Link>
                                    </div>
                                    <small className="text-body-secondary">Week 0 - SETUP</small>
                                    <small className="text-body-secondary">
                                        <b>Due</b> Sep 18, 2022 at 11:59pm | 100 pts
                                    </small>
                                </div>
                            </div>
                            <FaCheckCircle className="fa-lg me-3" style={{ color: 'green' }} />
                            <FaEllipsisV className="fa-lg" />
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}
export default Assignments;