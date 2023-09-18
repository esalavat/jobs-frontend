import React from "react";
import Jobs from "components/Jobs";

const JobsList = ({jobs}) => {
    return (
        <div className="p-10">
            <Jobs jobs={jobs} />
        </div>
    )
}

export default JobsList;