import React from "react";
import { useEffect, useState } from "react";

const Featured = () => {
  const [feature, setFeature] = useState([]);
  const [seeAll, setSeeAll] = useState(false);

  useEffect(() => {
    fetch("feature.json")
      .then((res) => res.json())
      .then((data) => setFeature(data));
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
          {feature
            .slice(0, seeAll ? feature.length : 4)
            .sort(() => Math.random() - 0.5)
            .map((list) => (
              <div className="border-solid border-2 px-8 py-[2rem] rounded-md space-y-2">
                <img className="h-12" src={list.logo} alt="" />
                <h2 className="mt-4">{list.position}</h2>
                <p>{list.companyName}</p>
                <div className="flex items-center gap-2">
                  <button className="px-2 py-1  border rounded-md text-blue-600">
                    {list.jobType}
                  </button>
                  <button className="px-2 py-1  border rounded-md text-blue-600">
                    Full Time
                  </button>
                </div>
                <div className="flex gap-16">
                  <p>{list.location}</p>
                  <p>{list.salary}</p>
                </div>
                <button
                  type="button"
                  className="px-6 py-2 font-bold text-cyan-50 bg-gradient-to-r from-purple-500 to-blue-400  border rounded-md bg-blue-500 mt-2  hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500  delay-75 duration-100 transition-all"
                >
                  View Details
                </button>
              </div>
            ))}
        </ul>
        <div className="flex justify-center w-full my-5">
          <button
            onClick={() => setSeeAll(!seeAll)}
            type="button"
            className="px-6 py-2 font-bold bg-gradient-to-r from-purple-500 to-blue-400 text-cyan-50 border rounded-md bg-blue-500 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500  delay-75 duration-100 transition-all mt-2"
          >
            {seeAll ? "See Less" : "See All"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
