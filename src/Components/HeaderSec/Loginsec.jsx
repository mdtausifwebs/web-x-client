import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../Redux/action/userAction";
import headerstyle from "./header.module.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const { user } = useSelector((state) => state.reducer);
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/")
  };

  return (
    <div className={headerstyle.loginbox}>
      <div className={headerstyle.login}>
        {user ? (
          <Link onClick={logoutHandler}>logout</Link>
        ) : (
          <Link to="/login">login</Link>
        )}
      </div>
      <div className={headerstyle.signup}>
        {user && user?.roll === "admin" ? (
          <Link to="/admin">
            {user ? (
              <div>
                <img src={user?.picture} alt="" />
                <p>{user?.name}</p>
              </div>
            ) : (
              "signup"
            )}{" "}
          </Link>
        ) : user && user?.roll === "developer" ? (
          <Link to="/developer">
            {user ? (
              <div>
                <img src={user?.picture} alt="" />
                <p>{user?.name}</p>
              </div>
            ) : (
              "signup"
            )}{" "}
          </Link>
        ) : user && user?.roll === "user" ? (
          <Link to="/user">
            {user ? (
              <div>
                <img src={user?.picture} alt="" />
                <p>{user?.name}</p>
              </div>
            ) : (
              "signup"
            )}{" "}
          </Link>
        ) : (
          <Link to="/signup">signup</Link>
        )}
      </div>
    </div>
  );
};

export default Login;
