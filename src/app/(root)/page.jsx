import React from "react";
import Banner from "../components/Home/Banner/Banner";
import LatestCourse from "../components/Home/LatestCourse/LatestCourse";
import Tastimonial from "../components/Home/Tastimonial/Tastimonial";

const Home = () => {
  return (
    <div className="min-h-screen mt-16 md:mt-18">
      <Banner />
      <LatestCourse />
      <Tastimonial />
    </div>
  );
};

export default Home;
