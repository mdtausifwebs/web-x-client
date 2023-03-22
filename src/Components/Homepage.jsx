import React from "react";
import Home from "./HomePageSec/Home";
import homepahestyle from "./homepage.module.css";
// import { useSelector } from "react-redux";
const Homepage = () => {
  // const { user } = useSelector((state) => state.reducer);
  // console.log("user", user);
  return (
    <div className={homepahestyle.homebox}>
      <div className={homepahestyle.home}>
        <Home />
      </div>
    </div>
  );
};

export default Homepage;
