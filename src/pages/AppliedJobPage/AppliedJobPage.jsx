import React, { useEffect, useState } from "react";
import AppliedJobs from "../../components/AppliedJobs/AppliedJobs";

const AppliedJobPage = () => {
    const [jobs, setJobs] = useState([]);
    const [selectedJobType, setSelectedJobType] = useState("");
    console.log(jobs);

    useEffect(() => {
        const storedJobs = JSON.parse(localStorage.getItem("jobs") || "[]");
        setJobs(storedJobs);
    }, []);

    const filteredJobs = jobs.filter((job) => job.jobType === selectedJobType);

    const handleClearFilter = () => {
        setSelectedJobType("");
    };

    const handleOnsiteClick = () => {
        setSelectedJobType("Onsite");
    };

    const handleRemoteClick = () => {
        setSelectedJobType("Remote");
    };

    return (
        <div className="max-w-2xl mx-auto">
            <div className="container px-4 py-8 mx-auto md:p-8 text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Applied Jobs</h1>
            </div>
            {jobs.length > 0 && (
                <div className="flex justify-center md:justify-end items-center gap-2 px-5 md:px-0">
                    <button
                        onClick={handleClearFilter}
                        className="px-2 py-1 font-bold text-cyan-50 border-md rounded-md bg-blue-500 bg-gradient-to-r from-purple-500 to-blue-400 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500  delay-75 duration-100 transition-all"
                    >
                        Clear Filter
                    </button>
                    <button
                        onClick={handleRemoteClick}
                        className="px-2 py-1 font-bold text-cyan-50 border-md rounded-md bg-blue-500 bg-gradient-to-r from-purple-500 to-blue-400 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500  delay-75 duration-100 transition-all"
                    >
                        Remote Job
                    </button>
                    <button
                        onClick={handleOnsiteClick}
                        className="px-2 py-1 font-bold text-cyan-50 border-md rounded-md bg-blue-500 bg-gradient-to-r from-purple-500 to-blue-400 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500  delay-75 duration-100 transition-all"
                    >
                        Onsite Job
                    </button>
                </div>
            )}
            {jobs.length === 0 ? (
                <h1 className="text-center font-bold text-4xl mt-10 text-[#3B82F6]">
                    You don't applied any job yet!
                </h1>
            ) : selectedJobType.length > 0 ? (
                filteredJobs.map((data, index) => (
                    <AppliedJobs data={data} key={index} />
                ))
            ) : (
                jobs.map((data, index) => (
                    <AppliedJobs data={data} key={index} />
                ))
            )}
        </div>
    );
};

export default AppliedJobPage;
