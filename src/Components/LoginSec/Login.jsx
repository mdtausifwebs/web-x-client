import React, { useEffect, useState } from "react";
import loginStyle from "./loginSec.module.css";
import image from "../../constant/image.png";
import { login } from "../../Redux/action/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.reducer);

  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const loginHandler = () => {
    const obj = {
      email,
      password,
    };
    // console.log(obj);
    dispatch(login(obj));
  };
  useEffect(() => {
    user && user?.roll === "admin" && navigate("/admin");
    user?.roll === "developer" && navigate("/developer");
    user?.roll === "user" && navigate("/user");
  }, [user, navigate]);
  return (
    <div className={loginStyle.loginBox}>
      <div className={loginStyle.login}>
        <div className={loginStyle.loginimage}>
          <img src={image} alt="" />
        </div>
        <div className={loginStyle.loginputsec}>
          <div className={loginStyle.logininput}>
            <p>Login </p>
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="type your email"
              onChange={(e) => setemail(e.target.value)}
            />
            <label htmlFor="">password</label>
            <input
              type="text"
              placeholder="type your password"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <div className={loginStyle.loginbutton}>
            <button onClick={loginHandler}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
