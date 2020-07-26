import { createSlice } from "@reduxjs/toolkit";

const tagsSlice = createSlice({
  name: "tags",
  initialState: [],
  reducers: {
    addTag(state, action) {
      state.push({ id: Math.random().toFixed(3) * 100, ...action.payload });
    },
    deleteTag(state, action) {
      const index = state.findIndex(item => item.id === action.payload.id);

      if (index > -1) {
        state.splice(index, 1);
      }
    }
  }
});

export default tagsSlice;
