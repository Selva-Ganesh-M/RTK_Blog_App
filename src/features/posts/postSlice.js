import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    id: 1,
    title: "This is the title.",
    content:
      "This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. ",
  },
  {
    id: 2,
    title: "This is the title.",
    content:
      "This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. ",
  },
];
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addNew: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const getAllPosts = (state) => state.posts;
export const { addNew } = postSlice.actions;
export default postSlice.reducer;
