import React from "react";
import JobsList from "components/pages/showjobs/JobsList";
import AddJobBtn from "components/AddJobBtn";
import Breadcrumbs from "components/Breadcrumbs";

const JobsPage = ({jobs}) => {

    return (
        <>
            <Breadcrumbs links={[{path:"/",display:"Jobs List"}]} />
            <div className="p-10">
                <AddJobBtn title="New Job" />
                <JobsList jobs={jobs} />
                <AddJobBtn />
            </div>
        </>
    )
}

export default JobsPage;