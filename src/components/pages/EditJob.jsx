import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import Breadcrumbs from "components/Breadcrumbs";

const EditJob = () => {

    let job = useLoaderData();
    console.log(job);

    return (
        <>
            <Breadcrumbs links={
                [
                    {path:"/",display:"Jobs List"},
                    {path:"",display:"Edit Job"}
                ]
            } />
            <div className="p-10">
                <h1 className="text-lg">Edit Job</h1>
                <div className="my-2"><Link to="/" className="underline hover:no-underline">Jobs</Link> &gt; Edit Job</div>
                <div>{job.jobTitle}</div>
                <div>{job.company}</div>
            </div>
        </>
    );
}

export default EditJob;