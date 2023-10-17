import React, { useEffect, useState } from "react";
import JobsPage from "components/pages/ShowJobs";
import EditJob from "components/pages/EditJob";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const App = () => {

  const [jobs, setJobs] = useState([])

  const fetchAllJobs = () => {
    let controller = new AbortController();

    fetch("http://jobsbackend:3000/jobs", {
      signal: controller.signal
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        setJobs(data);
      })
      .catch(err => {
        console.log(err);
      });

    return controller;
  };

  const saveJob = (job, isNew, callback) => {
    if(isNew) {
      createNewJob(job, callback);
    } else {
      updateJob(job, callback);
    }
  };

  const replacer = function(key, value) {

    if (this[key] instanceof Date) {
        return this[key].toUTCString(); //.toISOString(); //
    }

    return value;
  }

  const createNewJob = (job, callback) => {

    job.dateApplied = new Date(job.dateApplied);

    fetch("http://jobsbackend:3000/jobs", {
      method: "POST",
      body: JSON.stringify(job),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if(response.status != 200) throw response;
        return response.json()
      })
      .then(data => {
        console.log("New job created.", data);
        setJobs((prev) => {
          return [...prev, data];
        });
        callback();
      })
      .catch(err => {
        console.log("Error saving new job.", err);
        callback(err);
      });
  }


  const updateJob = (job, callback) => {

    job.dateApplied = new Date(job.dateApplied);

    fetch("http://jobsbackend:3000/jobs/" + job.id, {
      method: "PUT",
      body: JSON.stringify(job),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log("Updated job.", data);
        setJobs((prev) => {
          return [...prev, data];
        });
        callback();
      })
      .catch(err => {
        console.log("Error updating job.", err);
        callback(err);
      });
  }

  useEffect(() => {
    let controller = fetchAllJobs();

    return () => {
      controller.abort();
    }
  },[]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <JobsPage jobs={jobs} />,
    },
    {
      path: "/jobs/new",
      element: <EditJob saveJob={saveJob} newItem={true} />
    },
    {
      path: "/jobs/:id",
      element: <EditJob saveJob={saveJob} />,
      loader: async ({params}) => {
        return fetch(`http://localhost:3000/jobs/${params.id}`)
          .then(response => response.json())
          .catch(err => {
            console.log(err);
          });
      }
    }
  ]);

  return (
    <div>
        <div className="p-5">
          <h1 className="text-2xl my-3">Jobs</h1>
          <hr className="border-1 border-slate-500" />
          <RouterProvider router={router} />
        </div>
    </div>

  );
};

export default App;