import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-slate-100">
            <div className="flex justify-around items-center h-20  ">
                <div>
                    <NavLink to={"/"} className="text-3xl font-bold text-blue-500">
                        CareerGoal
                    </NavLink>
                </div>

                <div className="flex justify-between items-center gap-4 font-medium">
                    <div>
                        <NavLink to={"/statistics"} className={({isActive}) => isActive ? "active" : 'default'}>Statistics</NavLink>
                    </div>

                    <div>
                        <NavLink to={"/appliedJob"} className={({isActive}) => isActive ? "active" : 'default'}>Applied Jobs</NavLink>
                    </div>
                    
                    <div>
                        <NavLink to={"/blog"} className={({isActive}) => isActive ? "active" : 'default'}>Blog</NavLink>
                    </div>
                </div>
                <button
                    type="button"
                    className="px-6 py-2 font-bold text-cyan-50 border-md rounded-md bg-blue-500"
                >
                    Star Applying
                </button>
            </div>
        </div>
    );
};

export default Navbar;
