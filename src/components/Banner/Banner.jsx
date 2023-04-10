import React from 'react';
import bannerImg from "../../assets/hardy.png"

const Banner = () => {
    return (
       <div className='bg-slate-100'>
         <div className="flex justify-between container mx-auto items-center px-[6.5rem] ">
        <div className="space-y-4">
            <h1 className="text-5xl font-bold">One Step <br /> Closer To Your <br /> <span className="text-blue-400">Dream Job</span></h1>
            <p className='max-w-[500px]'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            <button type="button" className="px-6 py-2 font-bold text-cyan-50 border-md rounded-md bg-blue-500">Get Started</button>
            
        </div>


        <div>
            <img className='h-[36.5rem]' src={bannerImg} alt="" />
        </div>
      </div>
       </div>
    );
};

export default Banner;