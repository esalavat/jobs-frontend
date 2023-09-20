import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const EditJob = () => {

    let job = useLoaderData();
    console.log(job);

    return (
        <>
            <h1 className="text-lg">Edit Job</h1>
            <div className="my-2"><Link to="/" className="underline hover:no-underline">Jobs</Link> > Edit Job</div>
            <div>{job.jobTitle}</div>
            <div>{job.company}</div>
        </>
    );
}

export default EditJob;