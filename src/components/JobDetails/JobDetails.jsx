import React from "react";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const allJobData = useLoaderData();
    const currentJobData = window.location.pathname.slice(-2);
    const singleJobData = allJobData.find((e) => e.id === currentJobData);

    const setToLocalStorage = () => {
        const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
        console.log(jobs);
        const jobExists = jobs.some((job) => job.id === singleJobData.id);

        console.log(jobExists);

        if (!jobExists) {
            jobs.push(singleJobData);
            localStorage.setItem("jobs", JSON.stringify(jobs));
            toast.success("Job applied successfully!");
        } else {
            toast.error("You already applied this job!");
        }
    };

    return (
        <div className="px-5 max-w-6xl mx-auto ">
            <div className="md:flex justify-between gap-5 md:m-10">
                <div className="">
                    <p className="text-center text-xl font-bold mb-5">
                        Position <br />
                        {singleJobData.position}{" "}
                    </p>
                    <p className="mb-5">
                        {" "}
                        <span className="font-bold text-lg">
                            Job Description:{" "}
                        </span>{" "}
                        {singleJobData.jobDescription}{" "}
                    </p>

                    <p className="mb-5">
                        {" "}
                        <span className="font-bold text-lg">
                            Job Responsibility:{" "}
                        </span>
                        {singleJobData.jobResponsibility}
                    </p>

                    <p className="mb-5">
                        {" "}
                        <span className="font-bold text-lg">
                            Educational Requirements:{" "}
                        </span>
                        {singleJobData.educationalRequirements}
                    </p>

                    <p className="mb-5">
                        {" "}
                        <span className="font-bold text-lg">Experiences: </span>
                        {singleJobData.experiences}
                    </p>
                </div>
                <div className="mb-5 md:mb-0 p-5 border rounded bg-purple-100">
                    <h1 className="font-bold mb-1">Job Details</h1>
                    <hr />

                    <p className="mb-1">{singleJobData.salary}</p>
                    <p className="mb-3">Job Title : {singleJobData.position}</p>
                    <h1 className="mb-1 font-bold">Contact Information</h1>
                    <hr />
                    <p className="mb-1">Phone:{singleJobData.phone}</p>
                    <p className="mb-1">Email:{singleJobData.email}</p>
                    <div className="flex gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                        <h3>Address:{singleJobData.address}</h3>
                    </div>
                    <button
                        type="button"
                        className="container mx-auto py-2 font-bold text-cyan-50 border-md rounded-md bg-blue-500 bg-gradient-to-r from-purple-500 to-blue-400 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500  delay-75 duration-100 transition-all mt-2 "
                        onClick={() => setToLocalStorage()}
                    >
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
