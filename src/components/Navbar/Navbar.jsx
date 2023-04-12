import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-slate-100 py-5 md:py-0">
            <div className="md:flex md:justify-around md:items-center space-y-3 md:space-y-0 md:h-20">
                <div className="flex justify-center md:justify-start">
                    <NavLink
                        to={"/"}
                        className="text-3xl font-bold text-blue-500"
                    >
                        CareerGoal
                    </NavLink>
                </div>

                <div className="flex justify-center gap-5 md:flex md:justify-between md:items-center md:gap-4 font-medium">
                    <div>
                        <NavLink
                            to={"/"}
                            className={({ isActive }) =>
                                isActive ? "active" : "default"
                            }
                        >
                            Home
                        </NavLink>
                    </div>

                    <div>
                        <NavLink
                            to={"/statistics"}
                            className={({ isActive }) =>
                                isActive ? "active" : "default"
                            }
                        >
                            Statistics
                        </NavLink>
                    </div>

                    <div>
                        <NavLink
                            to={"/applied-job"}
                            className={({ isActive }) =>
                                isActive ? "active" : "default"
                            }
                        >
                            Applied Jobs
                        </NavLink>
                    </div>

                    <div>
                        <NavLink
                            to={"/blog"}
                            className={({ isActive }) =>
                                isActive ? "active" : "default"
                            }
                        >
                            Blog
                        </NavLink>
                    </div>
                </div>
                <div className="hidden md:flex justify-center md:justify-end">
                    <button
                        type="button"
                        className="px-6 py-2 font-bold text-cyan-50 border-md rounded-md bg-blue-500 bg-gradient-to-r from-purple-500 to-blue-400 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500  delay-75 duration-100 transition-all"
                    >
                        Star Applying
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
