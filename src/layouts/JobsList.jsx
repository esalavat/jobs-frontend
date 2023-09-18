import React from "react";
import Jobs from "components/Jobs";
import AddJobBtn from "../components/AddJobBtn";

const JobsList = ({jobs}) => {
    return (
        <div className="p-10">
            <AddJobBtn title="New Job" />
            <Jobs jobs={jobs} />
            <AddJobBtn />
        </div>
    )
}

export default JobsList;