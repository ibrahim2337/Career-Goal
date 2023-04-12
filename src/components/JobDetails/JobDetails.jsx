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
        toast.success("Job added successfully!"); 
    } else { 
        toast.error("You already applied this job!"); 
    } 
    
};

  return (
    <div className="px-40 flex gap-5 m-10">
      <div className="p-5 border">
        <p className="">Job Description:{singleJobData.jobDescription}</p>
        
        <h3 className="">Job Responsibility:{singleJobData.jobResponsibility}</h3>
        
        
        <h3 className="">Educational Requirements:{singleJobData.educationalRequirements}</h3>
        
        <h3 className="">Experiences:{singleJobData.experiences}</h3>
        
      </div>
      <div className="p-5 border bg-slate-200">
        <h1 className="font-bold">Job Details</h1>
        <hr />
        <h3>
          {singleJobData.salary}
        </h3>
        <h3>
          Job Title : {singleJobData.position}
        </h3>
        <h1>Contact Information</h1>
        <hr />
        <h3>
          Phone:{singleJobData.phone}
        </h3>
        <h3>
          Email:{singleJobData.email}
        </h3>
        <div className="flex gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
        <h3>
          Address:{singleJobData.address}
        </h3>
        </div>
        <button
          type="button"
          className="px-6 py-2 font-bold text-cyan-50 border-md rounded-md bg-blue-500 bg-gradient-to-r from-purple-500 to-blue-400 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500  delay-75 duration-100 transition-all" onClick={()=> setToLocalStorage()}
        >
        Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
