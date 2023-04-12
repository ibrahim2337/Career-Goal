import React from "react";
import { useEffect, useState } from "react";

const Category = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch("category.json")
            .then((res) => res.json())
            .then((data) => setCategory(data));
    }, []);

    return (
        <div className="container mx-auto mt-14">
            <div className="text-center">
                <h1 className="font-bold text-4xl mb-3">Job Category List</h1>
                <p className="hidden md:block">
                    Explore thousands of job opportunities with all the
                    information <br />
                    you need. Its your future
                </p>
                <p className="block md:hidden">
                    Explore thousands of job opportunities with all the
                    information you need. Its your future
                </p>
            </div>
            <div className="container mx-auto mt-10">
                <ul className="flex-col md:flex-row px-10 md:px-0 md:flex md:justify-evenly">
                    {category.map((items) => (
                        <div className="my-5 md:my-0 border-solid border-2 bg-slate-100 p-5 rounded-md drop-shadow-lg cursor-pointer">
                            <img
                                className="h-12 w-12"
                                src={items.icon}
                                alt=""
                            />
                            <h2 className="mt-6 font-semibold text-lg">
                                {items.title}
                            </h2>
                            <p className="mt-1 text-sm text-gray-700">
                                {items.vacancy}
                            </p>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Category;
