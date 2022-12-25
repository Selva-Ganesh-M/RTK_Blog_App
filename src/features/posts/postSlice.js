import { createSlice, nanoid } from "@reduxjs/toolkit";
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
    addNew: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title, content, userId) => {
        console.log(title, content, userId);
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
          },
        };
      },
    },
  },
});

export const getAllPosts = (state) => state.posts;
export const { addNew } = postSlice.actions;
export default postSlice.reducer;
