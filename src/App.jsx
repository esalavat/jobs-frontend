import React, { useEffect, useState } from "react";
import JobsPage from "components/pages/ShowJobs";
import EditJob from "components/pages/EditJob";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const App = () => {

  const [jobs, setJobs] = useState([])

  function fetchAllJobs() {
    let controller = new AbortController();

    fetch("http://localhost:3000/jobs", {
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
      path: "/jobs/:id",
      element: <EditJob />,
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