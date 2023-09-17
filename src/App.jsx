import React, { useEffect, useState } from "react";
import Jobs from "./components/Jobs";

const App = () => {

  const [jobs, setJobs] = useState([])

  function fetchJobsData() {
    fetch("http://localhost:3000/jobs")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setJobs(data)
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchJobsData();
  },[]);

  return (
    <div>
        <h1>Jobs</h1>
        <Jobs jobs={jobs} />
    </div>
  );
};

export default App;