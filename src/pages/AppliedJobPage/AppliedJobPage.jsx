import React, { useEffect, useState } from "react";
import AppliedJobs from "../../components/AppliedJobs/AppliedJobs";

const AppliedJobPage = () => {
  const [jobs, setJobs] = useState([]);
  console.log(jobs);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobs") || "[]");
    setJobs(storedJobs);
  }, []);

  return (
    <div>
      <div className="container px-4 py-8 mx-auto md:p-8 text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Applied Jobs</h1>
      </div>
      {
        jobs.length === 0 ? <h1>You don't applied any job yet!</h1> : jobs.map((data, index) => <AppliedJobs data={data} key={index} />)}
    </div>
  );
};

export default AppliedJobPage;
