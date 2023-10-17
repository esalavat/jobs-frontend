import React, { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Breadcrumbs from "components/Breadcrumbs";

const EditJob = ({ newItem, saveJob }) => {

    const navigate = useNavigate();

    const [job, setJob] = useState({
        // company: "",
        // jobTitle: "",
        // dateApplied: new Date(),
        // jobUrl: ""
    });
    
    useEffect(() => {
        if(!newItem) {
            setJob(useLoaderData());
        }
    },[]);

    const handleChange = (event) => {
        setJob((prevJob) => {
            return { 
                ...prevJob,
                [event.target.name]: event.target.value,
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        saveJob(job, newItem, (err) => {
            console.log("In callback");
            console.log(err);
            if(err && err != "") {
                //show error
                console.log("Error saving job", err);
            } else {
                navigate("/");
            }
        });
    }

    const displayStr = newItem ? "Edit Job" : "New Job";

    return (
        <>
            <Breadcrumbs links={
                [
                    {path:"/",display:"Jobs List"},
                    {path:"",display:displayStr}
                ]
            } />
            <div className="p-10">
                <h1 className="text-lg">{displayStr}</h1>
                
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="company">Company</label>
                        <input type="text" name="company" value={job.company} onChange={handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor="jobTitle">Job Title</label>
                        <input type="text" name="jobTitle" value={job.jobTitle} onChange={handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor="dateApplied">Date Applied</label>
                        <input type="datetime-local" name="dateApplied" value={job.dateApplied} onChange={handleChange}></input>    
                    </div>
                    <div>
                        <label htmlFor="jobUrl">Job URL</label>
                        <input type="text" name="jobUrl" value={job.jobUrl} onChange={handleChange}></input>    
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default EditJob;