import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UpdateUser from "../utils/UpdateUser";
import Userlist from "../utils/Userlist";
import UserAdd from "./UserAdd";

const Admin = () => {
  const { user } = useSelector((state) => state.reducer);
  const [popup, setpopup] = useState(false);
  const [temp, settemp] = useState(false);

  const clickHandler = (e) => {
    setpopup(true);
    settemp(e);
  };
  return (
    <div>
      <div>
        <div>
          <p>admin</p>
        </div>
        <div>
          <Link onClick={() => clickHandler("adduser")}>Add user</Link>
          <Link onClick={() => clickHandler("updateuser")}>user update</Link>
          <Link onClick={() => clickHandler("listuser")}>userlist</Link>
        </div>
        {popup === true && temp === "adduser" ? (
          <UserAdd setpopup={setpopup} />
        ) : null}
        {popup === true && temp === "updateuser" ? (
          <UpdateUser user={user} setpopup={setpopup} />
        ) : null}
        {popup === true && temp === "listuser" ? (
          <Userlist setpopup={setpopup} />
        ) : null}
      </div>
    </div>
  );
};

export default Admin;
