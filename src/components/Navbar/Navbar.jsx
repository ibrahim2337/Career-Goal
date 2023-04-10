import React from "react";


const Navbar = () => {
  return (
    <div className="bg-slate-100">
      <div className="flex justify-around items-center h-20  ">
        <div>
          <h1 className="text-3xl font-bold text-blue-400">CareerGoal</h1>
        </div>

        <div className="flex justify-between items-center gap-4 font-medium">
          <div>
            <h1>Statistics</h1>
          </div>
          <div>
            <h1>Applied Jobs</h1>
          </div>
          <div>
            <h1>Blog</h1>
          </div>
        </div>
        <button type="button" className="px-6 py-2 font-bold text-cyan-50 border-md rounded-md bg-blue-500">Star Applying</button>
        
      </div>
      
    </div>
  );
};

export default Navbar;
