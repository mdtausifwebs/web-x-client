import React from "react";
import { Link } from "react-router-dom";
import headerstyle from "./header.module.css";

const Menu = () => {
  return (
    <div className={headerstyle.menubox}>
      <div className={headerstyle.mobilemenu}>{Mobilemenu()}</div>
      <div className={headerstyle.tabmenu}>{Tabmenu()}</div>
      <div className={headerstyle.laptopmenu}>{Laptopmenu()}</div>
    </div>
  );
};
const Laptopmenu = () => {
  return (
    <div className={headerstyle.laptop}>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};
const Tabmenu = () => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};
const Mobilemenu = () => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default Menu;
