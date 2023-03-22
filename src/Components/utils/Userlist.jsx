import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiEdit } from "react-icons/ci";
import { getupdatesuser } from "../../Redux/action/userAction";
const Userlist = ({ setpopup }) => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.reducer);
  const updateHandler = (item) => {
    // console.log("item", item);
    dispatch(getupdatesuser(item));
    setpopup(true);
  };
  return (
    <div>
      <p onClick={() => setpopup(false)}>X</p>
      <div>
        <div>
          <div style={{ display: "flex" }}>
            <p>si no</p>
            <p>picture</p>
            <p>name</p>
            <p>age</p>
            <p>email</p>
            <p>mobile</p>
            <p>password</p>
            <p>roll</p>
            <p>status</p>
            <p>address</p>
            <p>Edit</p>
          </div>
          {users &&
            users.map((item, i) => {
              return (
                <div key={i} style={{ display: "flex" }}>
                  <p>{i + 1}</p>
                  <img
                    src={item.picture}
                    alt={item.picture}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  />
                  <p>{item.name}</p>
                  <p>{item.age}</p>
                  <p>{item.email}</p>
                  <p>{item.mobile}</p>
                  <p>{item.password}</p>
                  <p>{item.roll}</p>
                  <p>{item.status}</p>
                  <p>{item.address}</p>
                  <button onClick={() => updateHandler(item)}>
                    <CiEdit /> Edit
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Userlist;
