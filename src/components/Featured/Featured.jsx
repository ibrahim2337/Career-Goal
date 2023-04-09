import React from "react";
import { useEffect, useState } from "react";

const Featured = () => {
  const [feature, setCategory] = useState([]);

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
          {feature.map((list) => (
            <div className="border-solid border-2 px-8 py-[4rem] rounded-md">
              <img src={list.icon} alt="" />
              <h2>{list.position}</h2>
              <p>{list.companyName}</p>
              <p>{list.jobType}</p>
              <p>{list.location}</p>
              <p>{list.salary}</p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Featured;
