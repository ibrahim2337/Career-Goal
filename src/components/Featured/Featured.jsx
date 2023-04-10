import React from "react";
import { useEffect, useState } from "react";

const Featured = () => {
  const [feature, setCategory] = useState([]);
  const [seeAll, setSeeAll] = useState(false);

  useEffect(() => {
    fetch("feature.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <div className="container mx-auto mt-14">
      <div className="text-center">
        <h1 className="font-bold text-4xl">Featured Jobs</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="container mx-auto px-[6.5rem] mt-8">
        <ul className="grid grid-cols-2 gap-5">
          {feature.slice(0, seeAll ? feature.length : 4).map((list) => (
            <div className="border-solid border-2 px-8 py-[2rem] rounded-md">
              <img className="h-12" src={list.logo} alt="" />
              <h2 className="mt-4">{list.position}</h2>
              <p>{list.companyName}</p>
              <button className="border-md rounded-md">{list.jobType}</button>
              <p>{list.location}</p>
              <p>{list.salary}</p>
              <button
                type="button"
                className="px-6 py-2 font-bold text-cyan-50 border-md rounded-md bg-blue-500 mt-2"
              >
                View Details
              </button>
            </div>
          ))}
        </ul>
        <button
        onClick={()=>setSeeAll(!seeAll)}
          type="button"
          className="px-6 py-2 font-bold text-cyan-50 border-md rounded-md bg-blue-500 mt-2"
        >
          {seeAll ? "See Less" : "See All"}
          
        </button>
      </div>
    </div>
  );
};

export default Featured;
