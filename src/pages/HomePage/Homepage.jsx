import React from "react";
import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";
import Featured from "../../components/Featured/Featured";
import JobDetailsPage from "../JobDetailsPage/JobDetailsPage";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Featured />
      <JobDetailsPage />
    </div>
  );
};

export default Homepage;
