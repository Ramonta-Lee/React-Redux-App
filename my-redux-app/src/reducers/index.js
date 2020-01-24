//reducer

import {
  FETCHING_JOB_START,
  FETCHING_JOB_SUCCESS,
  FETCHING_JOB_FAIL
} from "../actions";

const initialState = {
  isLoading: false,
  jobs: null,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_JOB_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCHING_JOB_SUCCESS:
      return {
        ...state,
        isLoading: false,
        jobs: action.payload
      };
    case FETCHING_JOB_FAIL:
      return {
        ...state,
        error: "Failed to fetch job!"
      };
    default:
      return state;
  }
};
