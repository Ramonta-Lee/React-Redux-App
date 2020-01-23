// actions

import axios from "axios";

export const FETCHING_JOB_START = "FETCHING_JOB_START";
export const FETCHING_JOB_SUCCESS = "FETCHING_JOB_SUCCESS";
export const FETCHING_JOB_FAIL = "FETCHING_JOB_FAIL";

export const fetchJob = () => dispatch => {
  dispatch({ type: FETCHING_JOB_START });
  axios.get(`https://jobs.github.com/positions.json`).then(res => {
    console.log(res);
    // dispatch({type: FETCHING_JOB_SUCCESS, payload: res.data})
  });
  // .catch(err => {
  //  dispatch({type: FETCHING_JOB_FAIL, payload: err.response})
  // })
};
