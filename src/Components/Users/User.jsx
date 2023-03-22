import React from "react";
import { useSelector } from "react-redux";
import UpdateUser from "../utils/UpdateUser";

const User = () => {
  const { user } = useSelector((state) => state.reducer);
  return (
    <div>
      <div>
        <div>
          <h1>{user?.name}</h1>
          <p>user</p>
        </div>
        <div>
          <UpdateUser user={user}/>
        </div>
      </div>
    </div>
  );
};

export default User;
