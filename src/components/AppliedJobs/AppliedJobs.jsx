import React from "react";
import bannerImg from "../../assets/hardy.png";

const AppliedJobs = () => {
  return (
    <div className="my-5">
      
      <div className="mx-52 flex justify-between items-center border p-5 ">
        <div className="flex gap-10">
          <div className="">
          <img className="h-24" src={bannerImg} alt="" />
          </div>
          <div className="">
          <h1 className="font-bold mb-2">Technical Database Engineer</h1>
          <p className="mb-1">Google LLC</p>
          <div className="flex gap-2 ">
            <button className="px-2 py-1  border rounded-md text-blue-600">Remote</button>
            <button className="px-2 py-1  border rounded-md text-blue-600">Full Time</button>
          </div>
          <div className="flex gap-5 mt-1">
            <p>Dhaka, Bangladesh</p>
            <p className="">Salary : 70K - 90K</p>
          </div>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="px-6 py-2 font-bold text-cyan-50 border-md rounded-md bg-blue-500  bg-gradient-to-r from-purple-500 to-blue-400"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
