import React from "react";
import JobsListItem from "./JobsListItem";

const JobsList = ({jobs}) => {
    
    return (
        <table className="border-collapse w-full">
            <thead>
                <tr>
                    <th className="border-0 text-left p-3">Company</th>
                    <th className="border-0 text-left p-3">Title</th>
                    <th className="border-0 text-left p-3">Other Thing</th>
                </tr>
            </thead>
            <tbody>
                {jobs.map((job) => 
                    <JobsListItem job={job} key={job.id} />
                )}
            </tbody>
        </table>
    );
};

export default JobsList;