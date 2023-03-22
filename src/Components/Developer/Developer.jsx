import React, { useState } from "react";
import { useSelector } from "react-redux";
import UpdateUser from "../utils/UpdateUser";
import Userlist from "../utils/Userlist";

const Developer = () => {
  const { user } = useSelector((state) => state.reducer);
  const [popup, setpopup] = useState(false);
  return (
    <div>
      <div>
        <div>
          <p>developer</p>
        </div>
        <div>
          {popup ? <UpdateUser user={user} setpopup={setpopup} /> : null}
        </div>
        <div>
          <Userlist setpopup={setpopup}/>
        </div>
      </div>
    </div>
  );
};

export default Developer;
