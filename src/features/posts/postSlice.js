import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  posts: [
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
  ],
};
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export const getAllPosts = (state) => state.posts.posts;
export default postSlice.reducer;
