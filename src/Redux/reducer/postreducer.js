import { createReducer } from "@reduxjs/toolkit";
const initialstate = {};
export const ReducerUser = createReducer(initialstate, {
  postRequest: (state) => {
    state.loading = true;
  },
  postSuccess: (state, action) => {
    state.loading = false;
    state.post = action.payload;
  },
  postFaild: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  postsRequest: (state) => {
    state.loading = true;
  },
  postsSuccess: (state, action) => {
    state.loading = false;
    state.posts = action.payload;
  },
  postsFaild: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  commitRequest: (state) => {
    state.loading = true;
  },
  commitSuccess: (state, action) => {
    state.loading = false;
    state.commit = action.payload;
  },
  commitFaild: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  commitsRequest: (state) => {
    state.loading = true;
  },
  commitsSuccess: (state, action) => {
    state.loading = false;
    state.commits = action.payload;
  },
  commitsFaild: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  likeRequest: (state) => {
    state.loading = true;
  },
  likeSuccess: (state, action) => {
    state.loading = false;
    state.like = action.payload;
  },
  likeFaild: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  shereRequest: (state) => {
    state.loading = true;
  },
  shereSuccess: (state, action) => {
    state.loading = false;
    state.shere = action.payload;
  },
  shereFaild: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});
