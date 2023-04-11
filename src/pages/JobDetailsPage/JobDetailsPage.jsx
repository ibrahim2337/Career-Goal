import React from 'react';
import JobDetails from '../../components/JobDetails/JobDetails';

const JobDetailsPage = () => {
    return (
        <div>
            <div className="container px-4 py-8 mx-auto md:p-8 text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Job Details</h1>
      </div>
      <JobDetails />
        </div>
    );
};

export default JobDetailsPage;