import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaCaretDown } from "react-icons/fa";
import { useParams } from "react-router";
import { MdVisibility } from 'react-icons/md';
import { TbGripVertical } from "react-icons/tb";

function ModuleList() {
    const { courseId } = useParams();
    const modulesList = modules.filter((module) => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState<{
        _id: string;
        name: string;
        description: string;
        course: string;
        lessons?: { _id: string; name: string; description: string; module: string; }[];
    } | null>(null);
    return (
        <>
            <div className="row" style={{marginTop: "20px"}}>
                <div className="col d-flex justify-content-end mb-2 gap-1">
                    <button type="button" className="btn" style={{ backgroundColor: "#f5f5f5", border: "1px solid lightgray" }}>Collapse All</button>
                    <button type="button" className="btn" style={{ backgroundColor: "#f5f5f5", border: "1px solid lightgray" }}>
                        View Progress <MdVisibility />
                    </button>
                    <div className="dropdown">
                        <button className="btn dropdown-toggle" type="button" style={{ backgroundColor: "#f5f5f5", border: "1px solid lightgray" }}
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <FaCheckCircle className="me-2" style={{ color: "lightgreen" }} />
                            Publish All
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Publish All</a></li>
                            <li><a className="dropdown-item" href="#">Publish all items and modules</a></li>
                            <li><a className="dropdown-item" href="#">Unpublish all</a></li>
                        </ul>
                    </div>
                    <button type="button" className="btn btn-danger"><FaPlusCircle /> Module</button>
                    <div className="dropdown">
                        <button className="btn" style={{ backgroundColor: "#f5f5f5", border: "1px solid lightgray" }} type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <FaEllipsisV />
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Option 1</a></li>
                            <li><a className="dropdown-item" href="#">Option 2</a></li>
                            <li><a className="dropdown-item" href="#">Option 3</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row" style={{paddingTop: "10px"}}>
                <hr/>
            </div>
            <ul className="list-group" style={{paddingTop: "10px"}}>
                {modulesList.map((module, index) => (
                    <li key={index}
                        className="list-group-item list-group-item-parent"
                        style={{ backgroundColor: "#f5f5f5", border: "1px solid lightgray" }}
                        onClick={() => setSelectedModule(selectedModule === module ? null : module)}>
                        <div>
                            <TbGripVertical className="me-2" />
                            <FaCaretDown className="me-2" />
                            {module.name}
                            <span className="float-end">
                                <FaCheckCircle className="text-success" />
                                <FaPlusCircle className="ms-2" />
                                <FaEllipsisV className="ms-2" />
                            </span>
                        </div>
                        {selectedModule === module && module.lessons && (
                            <ul className="list-group" style={{ marginTop: "10px" }}>
                                {module.lessons?.map((lesson, index) => (

                                    <li className="list-group-item list-group-item-child"
                                        key={index}>
                                        <TbGripVertical className="me-2" />
                                        {lesson.name}
                                        <span className="float-end">
                                            <FaCheckCircle className="text-success" />
                                            <TbGripVertical className="ms-2" />
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}
export default ModuleList;