import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const JobsListItem = ({job}) => {

    const [expandedFlag, setExpandedFlag] = useState();

    let expanded = expandedFlag ?? (job.subItems.length > 0 || job.jobUrl != "");

    function toggleExpanded(e) {
        e.preventDefault();

        setExpandedFlag(prev => {
            if(prev) {
                return !prev;
            }

            return !expanded;
        });
    }

    const navigate = useNavigate();

    const handleEdit = (id) => {
        return (e) => {
            e.preventDefault();
            navigate("/jobs/"+id);
        }
    }

    return (
        <React.Fragment key={job.id}>
            <tr className="mb-1 justify-center cursor-pointer" onClick={toggleExpanded}>
                <td className={"bg-slate-300 rounded-tl-md p-3" + (!expanded ? " rounded-bl-md" : "")}>{job.company}</td>
                <td className="bg-slate-300 p-3">{job.jobTitle}</td>
                <td className="bg-slate-300 p-3">{job.dateApplied}</td>
                <td className={"bg-slate-400 rounded-tr-md p-3 text-center" + (!expanded ? " rounded-br-md" : "")} onClick={handleEdit(job.id)}>
                    Edit
                </td>
            </tr>
            {expanded 
                ?
                <tr>
                    <td colSpan="4" className="bg-slate-200 rounded-bl-md rounded-br-md p-3">
                        {job.jobUrl ?? 
                            <span>Job Listing: {job.jobUrl}</span>
                        }
                        <ul>
                            {job.subItems.map((subItem) => {
                                return (
                                    <li key={job.id+":"+subItem.id}>{subItem.name} - {subItem.value}</li>
                                );
                            })}
                        </ul>
                    </td>
                </tr>
                : <></>
            }
            <tr className="h-4"></tr>
        </React.Fragment>
    );
};

export default JobsListItem;