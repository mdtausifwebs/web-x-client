import React, { useEffect, useState } from "react";
import registerStyle from "./loginSec.module.css";
import image from "../../constant/image.png";
import { signup } from "../../Redux/action/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.reducer);
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const registerHandler = () => {
    const obj = {
      name,
      email,
      password,
    };
    // console.log(obj);
    dispatch(signup(obj));
  };
  useEffect(() => {
    user && user?.roll === "admin" && navigate("/admin");
    user?.roll === "developer" && navigate("/developer");
    user?.roll === "user" && navigate("/user");
  }, [user, navigate]);
  return (
    <div className={registerStyle.registerbox}>
      <div className={registerStyle.register}>
        <div className={registerStyle.registerimage}>
          <img src={image} alt="" />
        </div>
        <div className={registerStyle.registerinputsec}>
          <div className={registerStyle.registerinput}>
            <p>Sign Up </p>
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="type your name"
              onChange={(e) => setname(e.target.value)}
            />
            <label htmlFor="">Email</label>

            <input
              type="text"
              placeholder="type your email"
              onChange={(e) => setemail(e.target.value)}
            />
            <label htmlFor="">Password</label>
            <input
              type="text"
              placeholder="type your password"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <div className={registerStyle.registerbutton}>
            <button onClick={registerHandler}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
