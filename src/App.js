import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/FooterSec/Footer";
import Header from "./Components/HeaderSec/Header";
import Login from "./Components/LoginSec/Login.jsx";
import Homepage from "./Components/Homepage";
import User from "./Components/Users/User";
import Register from "./Components/LoginSec/Register.jsx";
import { useEffect } from "react";
import { getuser, getusers } from "../src/Redux/action/userAction";
import { useDispatch, useSelector } from "react-redux";
import Admin from "./Components/Admin/Admin";
import Developer from "./Components/Developer/Developer";
function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.reducer);
  useEffect(() => {
    dispatch(getuser());
    dispatch(getusers());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        {user && user?.roll === "admin" ? (
          <Route path="/admin" element={<Admin />} />
        ) : user?.roll === "developer" ? (
          <Route path="/developer" element={<Developer />} />
        ) : (
          <Route path="/user" element={<User />} />
        )}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
