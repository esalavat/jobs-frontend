import React, { useEffect, useState } from "react";
import JobsPage from "./layouts/JobsPage";

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
        data.forEach(item => item.subItems = []);
        data[1].subItems = [{"id": 1, "name": "item 1", "value": "Testing sub items 1"},{"id": 2, "name": "item 2", "value": "Testing sub items 2"},{"id": 3, "name": "item 3", "value": "Testing sub items 3"}]
        setJobs(data);
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
        <JobsPage jobs={jobs} />
    </div>
  );
};

export default App;