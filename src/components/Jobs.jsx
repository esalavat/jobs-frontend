import React from "react";
import AddJobBtn from "components/AddJobBtn"

const Jobs = ({jobs}) => {
    
    console.log(jobs);

    return (
        <div>
            {jobs.map((job) => {
                return (
                    <div key={job.id} className="flex flex-row bg-slate-200 rounded-xl overflow-hidden mb-1">
                        <div className="flex-auto p-3">{job.company}</div>
                        <div className="flex-auto p-3">{job.jobTitle}</div>
                        <div className="flex-auto p-3">{job.dateApplied}</div>
                        <div className="flex-auto p-3">{job.jobUrl}</div>
                        <div className="flex-auto p-3 bg-slate-300 text-center">
                            <button>Edit</button>
                        </div>
                    </div>
                );
            })}
            <AddJobBtn />
        </div>
    );
};

export default Jobs;