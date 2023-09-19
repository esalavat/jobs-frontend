import React from "react";

const JobsListItem = ({job}) => {

    let expanded = job.subItems.length > 0 || job.jobUrl != "";

    return (
        <>
        <tr key={job.id} className="mb-1 justify-center">
            <td className={"bg-slate-300 rounded-tl-md p-3" + (!expanded ? " rounded-bl-md" : "")}>{job.company}</td>
            <td className="bg-slate-300 p-3">{job.jobTitle}</td>
            <td className="bg-slate-300 p-3">{job.dateApplied}</td>
            <td className={"bg-slate-400 rounded-tr-md p-3 text-center" + (!expanded ? " rounded-br-md" : "")}>
                <button>Edit</button>
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
                                <li>{subItem.name} - {subItem.value}</li>
                            );
                        })}
                    </ul>
                </td>
            </tr>
            : <></>
        }
        <tr className="h-4"></tr>
        </>
    );
};

export default JobsListItem;