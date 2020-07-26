import { combineReducers } from "@reduxjs/toolkit";
import entriesSlice, { entrySlice } from "./entries/slice";
import tagsSlice from "./tags/slice";

export default combineReducers({
  entries: entriesSlice.reducer,
  entry: entrySlice.reducer,
  tags: tagsSlice.reducer
});
