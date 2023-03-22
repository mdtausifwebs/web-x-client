import React from "react";
import Login from "./Loginsec";
import Logo from "./Logo";
import Menu from "./Menu";
import headerstyle from "./header.module.css";
const Header = () => {
  return (
    <div className={headerstyle.headerContainer}>
      <div className={headerstyle.logoSec}>
        <Logo />
      </div>
      <div className={headerstyle.menuSec}>
        <Menu />
      </div>
      <div className={headerstyle.loginSec}>
        <Login />
      </div>
    </div>
  );
};

export default Header;
