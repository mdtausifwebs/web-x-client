import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { adduser } from "../../Redux/action/userAction";
const UserAdd = () => {
  const dispatch = useDispatch();
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const updateHandler = () => {
    const obj = {
      name,
      email,
      password,
    };
    console.log('obj', obj);
    dispatch(adduser(obj));
  };
  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => setname(e.target.value)}
          placeholder="type here your name"
        />
        <input
          type="text"
          onChange={(e) => setemail(e.target.value)}
          placeholder="type here your email"
        />
        <input
          type="text"
          onChange={(e) => setpassword(e.target.value)}
          placeholder="type here your password"
        />
      </div>
      <div>
        <button onClick={updateHandler}>add user</button>
      </div>
    </div>
  );
};

export default UserAdd;
