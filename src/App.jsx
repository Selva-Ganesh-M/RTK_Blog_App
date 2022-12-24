import React from "react";
import AddPost from "./features/posts/AddPost";
import PostsList from "./features/posts/PostsList";

const App = () => {
  return (
    <div class="app">
      <AddPost />
      <PostsList />
    </div>
  );
};

export default App;
