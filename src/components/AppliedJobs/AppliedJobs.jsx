import React from "react";

import { Link } from "react-router-dom";

const AppliedJobs = ({ data }) => {
  const { logo, position, companyName, jobType, location, salary, id } = data;
  console.log(data);

  return (
    <div className="my-5">
      <div className="mx-52 flex justify-between items-center border p-5 ">
        <div className="flex gap-10">
          <div className="">
            <img className="h-10 w-20 mt-11" src={logo} alt="" />
          </div>
          <div className="">
            <h1 className="font-bold mb-2">{position}</h1>
            <p className="mb-1">{companyName}</p>
            <div className="flex gap-2 ">
              <button className="px-2 py-1  border rounded-md text-blue-600">
                {jobType}
              </button>
              <button className="px-2 py-1  border rounded-md text-blue-600">
                Full Time
              </button>
            </div>
            <div className="flex gap-5 mt-1">
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>{location}</p>
              </div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="">{salary}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Link to={`/job-details/${id}`}>
            <button
              type="button"
              className="px-6 py-2 font-bold text-cyan-50 bg-gradient-to-r from-purple-500 to-blue-400  border rounded-md bg-blue-500 mt-2  hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500  delay-75 duration-100 transition-all"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
