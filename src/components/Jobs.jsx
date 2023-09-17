import React from "react";

const Jobs = ({jobs}) => {
    return (
        <div>
            {jobs.map((job) => {
                return (
                    <div key={job.id}>
                        <span>{job.jobTitle}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default Jobs;