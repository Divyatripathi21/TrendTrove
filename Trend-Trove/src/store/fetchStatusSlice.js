import {createSlice} from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: 'fetchStatus',
  initialState: {
    fetchDone: false, // false: 'PENDING' and true: 'DONE'
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false;
    }
  }
});


export const {markFetchDone,markFetchingStarted,markFetchingFinished,currentlyFetching} = fetchStatusSlice.actions;

export const fetchStatusActions = fetchStatusSlice.actions;


export default fetchStatusSlice;