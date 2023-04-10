import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-slate-100">
            <div className="flex justify-around items-center h-20  ">
                <div>
                    <NavLink to={"/"} className="text-3xl font-bold text-blue-400">
                        CareerGoal
                    </NavLink>
                </div>

                <div className="flex justify-between items-center gap-4 font-medium">
                    <div>
                        <NavLink to={"/statistics"}>Statistics</NavLink>
                    </div>
                    <div>
                        <h1>Applied Jobs</h1>
                    </div>
                    <div>
                        <NavLink to={"/blog"}>Blog</NavLink>
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
