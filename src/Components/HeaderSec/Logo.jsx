import React from "react";
import headerstyle from "./header.module.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className={headerstyle.logobox}>
      <div className={headerstyle.logo}>
        <Link to="/">
          <p>tausif</p>
        </Link>
      </div>
    </div>
  );
};

export default Logo;
