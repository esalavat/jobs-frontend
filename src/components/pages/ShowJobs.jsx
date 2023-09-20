import React from "react";
import JobsList from "components/pages/ShowJobs/JobsList";
import AddJobBtn from "components/AddJobBtn";

const JobsPage = ({jobs}) => {

    return (
        <>
            <AddJobBtn title="New Job" />
            <JobsList jobs={jobs} />
            <AddJobBtn />
        </>
    )
}

export default JobsPage;