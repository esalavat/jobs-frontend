import React, { useEffect, useState } from "react";
import JobsList from "./layouts/JobsList";

const App = () => {

  const [jobs, setJobs] = useState([])

  function fetchJobsData() {
    let controller = new AbortController();

    fetch("http://localhost:3000/jobs", {
      signal: controller.signal
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        setJobs(data)
      })
      .catch(err => {
        console.log(err);
      });

    return controller;
  }

  useEffect(() => {
    let controller = fetchJobsData();

    return () => {
      controller.abort();
    }
  },[]);

  return (
    <div>
        <h1>Jobs</h1>
        <JobsList jobs={jobs} />
    </div>
  );
};

export default App;