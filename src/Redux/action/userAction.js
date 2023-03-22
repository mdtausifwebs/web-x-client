import axios from "axios";
// const url = "https://agumenttiksolutionserver.onrender.com/api/v1/";
const url = "http://localhost:4000/api/v1/";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

export const signup = (body) => async (dispatch) => {
  try {
    dispatch({
      type: "signupRequest",
    });
    const { data } = await axios.post(`${url}signup`, body, config);
    // console.log("data", data);
    dispatch({
      type: "signupSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "signupFaild",
      payload: error.message,
    });
  }
};

export const login = (body) => async (dispatch) => {
  try {
    dispatch({
      type: "LoginRequest",
    });
    const { data } = await axios.post(`${url}login`, body, config);
    // console.log("data", data);
    dispatch({
      type: "LoginSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoginFaild",
      payload: error.message,
    });
  }
};
export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: "logoutRequest",
    });
    const { data } = await axios.get(`${url}logout`, config);
    dispatch({
      type: "logoutSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "logoutFaild",
      payload: error.message,
    });
  }
};
export const getuser = () => async (dispatch) => {
  try {
    dispatch({
      type: "getuserRequest",
    });
    const { data } = await axios.get(`${url}getuser`, config);
    // console.log('data', data);
    dispatch({
      type: "getuserSuccess",
      payload: data?.user,
    });
  } catch (error) {
    dispatch({
      type: "getuserFaild",
      payload: error.message,
    });
  }
};
export const getusers = () => async (dispatch) => {
  try {
    dispatch({
      type: "getusersRequest",
    });
    const { data } = await axios.get(`${url}getusers`, config);
    // console.log('data', data);
    dispatch({
      type: "getusersSuccess",
      payload: data?.users,
    });
  } catch (error) {
    dispatch({
      type: "getusersFaild",
      payload: error.message,
    });
  }
};

export const adduser = (body) => async (dispatch) => {
  console.log('body', body);
  try {
    dispatch({
      type: "adduserRequest",
    });
    const { data } = await axios.post(`${url}adduser`, body, config);
    console.log('data', data);
    dispatch({
      type: "adduserSuccess",
      payload: data?.user,
    });
  } catch (error) {
    dispatch({
      type: "adduserFaild",
      payload: error.message,
    });
  }
};

export const getupdatesuser = (body) => async (dispatch) => {
  try {
    dispatch({
      type: "updatesuserSuccess",
      payload: body
    });
  } catch (error) {
    dispatch({
      type: "updatesuserFaild",
      payload: error.message,
    });
  }
};
export const updateuser = (body) => async (dispatch) => {
  try {
    dispatch({
      type: "updateuserRequest",
    });
    const { data } = await axios.patch(`${url}updateuser`, body, config);
    dispatch({
      type: "updateuserSuccess",
      payload: data?.user,
    });
  } catch (error) {
    dispatch({
      type: "updateuserFaild",
      payload: error.message,
    });
  }
};
