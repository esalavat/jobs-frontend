import React from "react";
import JobsList from "components/JobsList";
import AddJobBtn from "../components/AddJobBtn";

const JobsPage = ({jobs}) => {
    return (
        <div className="p-10">
            <AddJobBtn title="New Job" />
            <JobsList jobs={jobs} />
            <AddJobBtn />
        </div>
    )
}

export default JobsPage;