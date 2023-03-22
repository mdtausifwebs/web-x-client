import React, { useEffect, useState } from "react";
import updateStyle from "./updateuser.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateuser } from "../../Redux/action/userAction";
import { Link } from "react-router-dom";
import { UploadFile } from "../../Redux/action/fileuploadAction";
const UpdateUser = ({ setpopup }) => {
  const dispatch = useDispatch();
  const { Updateuserdata } = useSelector((state) => state.reducer);
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [picture, setpicture] = useState();
  const [roll, setroll] = useState();
  const [address, setaddress] = useState();
  const [age, setage] = useState();
  const [mobile, setmobile] = useState();
  const [status, setstatus] = useState();
  const [file, setfile] = useState();

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const config = {
          headers: {
            "content-type": file.type,
          },
          withCredentials: true,
        };
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        let res = await UploadFile(data, config);
        // console.log("res", res);
        setpicture(res.imageurl)
      }
    };
    getImage();
  }, [file]);
  const onfileChange = (e) => {
    if (e.target.files) {
      setfile(e.target.files[0]);
    }
  };

  const updateHandler = () => {
    const obj = {
      id: Updateuserdata._id,
      name,
      email,
      password,
      picture,
      roll,
      address,
      age,
      mobile,
      status,
    };
    // console.log("obj", obj);
    dispatch(updateuser(obj));
  };
  useEffect(() => {
    // console.log("Updateuserdata", Updateuserdata);
    setname(Updateuserdata?.name);
    setemail(Updateuserdata?.email);
    setpassword(Updateuserdata?.password);
    setpicture(Updateuserdata?.picture);
    setroll(Updateuserdata?.roll);
    setaddress(Updateuserdata?.address);
    setage(Updateuserdata?.age);
    setmobile(Updateuserdata?.mobile);
    setstatus(Updateuserdata?.status);
  }, [Updateuserdata]);

  return (
    <div className={updateStyle.updatebox}>
      <div className={updateStyle.update}>
        <Link onClick={() => setpopup(false)}>X</Link>
        <div>
          <label htmlFor="">image</label>
          <input type="file" id="fileInput" onChange={(e) => onfileChange(e)} />
        </div>
        <div>
          <label htmlFor="">name</label>
          <input
            type="text"
            onChange={(e) => setname(e.target.value)}
            placeholder="type here your name"
            defaultValue={Updateuserdata?.name || ""}
          />
        </div>
        <div>
          <label htmlFor="">email</label>
          <input
            type="text"
            onChange={(e) => setemail(e.target.value)}
            placeholder="type here your email"
            defaultValue={Updateuserdata?.email || ""}
          />
        </div>
        <div>
          <label htmlFor="">address</label>
          <input
            type="text"
            onChange={(e) => setaddress(e.target.value)}
            placeholder="type here your address"
            defaultValue={Updateuserdata?.address || ""}
          />
        </div>
        <div>
          <label htmlFor="">age</label>
          <input
            type="number"
            onChange={(e) => setage(e.target.value)}
            placeholder="type here your age"
            defaultValue={Updateuserdata?.age || ""}
          />
        </div>
        <div>
          <label htmlFor="">mobile</label>
          <input
            type="number"
            onChange={(e) => setmobile(e.target.value)}
            placeholder="type here your mobile"
            defaultValue={Updateuserdata?.mobile || ""}
          />
        </div>
        <div>
          <label htmlFor="">roll</label>
          <select name="roll" onChange={(e) => setroll(e.target.value)}>
            <option value={Updateuserdata?.roll}>{Updateuserdata?.roll}</option>
            <option value="developer">developer</option>
            <option value="admin">admin</option>
            <option value="user">user</option>
          </select>
        </div>
        <div>
          <label htmlFor="">status</label>
          <select name="status" onChange={(e) => setstatus(e.target.value)}>
            <option value={Updateuserdata?.status}>
              {Updateuserdata?.status}
            </option>
            <option value="active">active</option>
            <option value="inactive">inactive</option>
            <option value="pending">pending</option>
          </select>
        </div>
        <div>
          <button onClick={updateHandler}>update user</button>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
