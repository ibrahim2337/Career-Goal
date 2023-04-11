import React from "react";
import AppliedJobs from "../../components/AppliedJobs/AppliedJobs";

const AppliedJobPage = () => {
  return (
    <div>
      <div className="container px-4 py-8 mx-auto md:p-8 text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Applied Jobs</h1>
      </div>
        <AppliedJobs />
    </div>
  );
};

export default AppliedJobPage;
