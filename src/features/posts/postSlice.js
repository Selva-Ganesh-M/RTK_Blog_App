import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Declarations
const baseApi = "https://jsonplaceholder.typicode.com";
const initialState = {
  posts: [],
  status: "idle",
  error: "",
};

// Thunk Functions
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await axios.get(`${baseApi}/posts`);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const addPost = createAsyncThunk("posts/addPost", async (newPost) => {
  try {
    console.log("here");
    const response = await axios.post(`${baseApi}/posts`, newPost);
    console.log("here");
    return response.data;
  } catch (error) {
    return error.message;
  }
});

// POST SLICE
const postSlice = createSlice({
  name: "posts",
  initialState,

  // REDUCERS
  reducers: {
    addNew: {
      reducer: (state, action) => {
        state.posts.push(action.payload);
      },
      prepare: (title, content, userId) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            createdAt: new Date().toISOString(),
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    updateReaction: (state, action) => {
      const { postId, key } = action.payload;
      const post = state.posts.find((post) => post.id === postId);
      post.reactions[key]++;
    },
  },

  // EXTRA REDUCERS
  extraReducers: (builder) => {
    builder

      // FETCH POSTS
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "success";

        const posts = action.payload.map((post) => {
          post.createdAt = new Date().toISOString();

          post.reactions = {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          };

          return post;
        });

        state.posts = posts;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        (state.status = "failed"), (state.error = action.payload);
      })

      // ADD POST
      //There is no pending and rejected cause it seems if we add them then whenever adding a new post to the list it re-renders the whole list which inturn shows the loading component cause we set the status to "loading" when the promise is pending. So I guess we need to handle this seperately
      .addCase(addPost.fulfilled, (state, action) => {
        const newPost = action.payload;
        newPost.userId = Number(newPost.userId);
        newPost.createdAt = new Date().toISOString();
        newPost.reactions = {
          thumbsUp: 0,
          wow: 0,
          heart: 0,
          rocket: 0,
          coffee: 0,
        };
        state.posts.push(newPost);
      });
  },
});

// SELECTOR EXPORTS
export const getAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

// ACTIONS EXPORT
export const { addNew, updateReaction } = postSlice.actions;

// DEFAULT EXPORT
export default postSlice.reducer;
