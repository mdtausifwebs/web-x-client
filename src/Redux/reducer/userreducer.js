import { createReducer } from "@reduxjs/toolkit";
const initialstate = {};
export const ReducerUser = createReducer(initialstate, {
  signupRequest: (state) => {
    state.loading = true;
  },
  signupSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
  },
  signupFaild: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  LoginRequest: (state) => {
    state.loading = true;
  },
  LoginSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
  },
  LoginFaild: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  logoutRequest: (state) => {
    state.loading = true;
  },
  logoutSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  logoutFaild: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  getuserRequest: (state) => {
    state.loading = true;
  },
  getuserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
  },
  getuserFaild: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  adduserRequest: (state) => {
    state.loading = true;
  },
  adduserSuccess: (state, action) => {
    state.loading = false;
    state.userdata = action.payload;
  },
  adduserFaild: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  getusersRequest: (state) => {
    state.loading = true;
  },
  getusersSuccess: (state, action) => {
    state.loading = false;
    state.users = action.payload;
  },
  getusersFaild: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  updatesuserSuccess: (state, action) => {
    state.loading = false;
    state.Updateuserdata = action.payload;
  },
  updatesuserFaild: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  uploadfileRequest: (state) => {
    state.loading = true;
  },
  uploadfileSuccess: (state, action) => {
    state.loading = false;
    state.filepath = action.payload;
  },
  uploadfileFaild: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});
