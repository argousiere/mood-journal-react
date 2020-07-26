import { createSlice } from "@reduxjs/toolkit";

const entriesSlice = createSlice({
  name: "entries",
  initialState: [],
  reducers: {
    addEntry(state, action) {
      state.push({ id: Math.random().toFixed(2) * 100, ...action.payload });
    },
    deleteEntry(state, action) {
      const index = state.findIndex(item => item.id === action.payload.id);

      if (index > -1) {
        state.splice(index, 1);
      }
    }
  }
});

export const entrySlice = createSlice({
  name: "entry",
  initialState: null,
  reducers: {
    getEntry: (state, action) => {
      const found = action.payload.entries.find(
        entry => entry.id.toString() === action.payload.id
      );
      if (found) {
        state = found;
      }

      return state;
    }
  }
});

export default entriesSlice;
