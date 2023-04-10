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
                <h1 className="font-bold text-4xl">Job Category List</h1>
                <p>
                    Explore thousands of job opportunities with all the
                    information you need. Its your future
                </p>
            </div>
            <div className="container mx-auto px-[6.5rem] mt-8">
                <ul className="flex justify-between">
                    {category.map((items) => (
                        <div className="border-solid border-2 bg-slate-100 p-5 rounded-md">
                            <img className="h-12" src={items.icon} alt="" />
                            <h2 className="mt-6">{items.title}</h2>
                            <p className="mt-1">{items.vacancy}</p>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Category;
