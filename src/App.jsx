import React from "react";
import { Route, Routes } from "react-router-dom";
import AddPost from "./features/posts/AddPost";
import PostsList from "./features/posts/PostsList";
import Layout from "./components/Layout";
import IndividualPost from "./features/posts/IndividualPost";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "./features/posts/postSlice";
import EditPost from "./features/posts/EditPost";

const App = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const posts = useSelector(getAllPosts);
  let content;
  if (posts) {
    content = (
      <Routes>
        {/* @Route: "/" */}
        <Route path="/" element={<Layout />}>
          <Route index element={<PostsList />} />

          {/* @Route: "post" */}
          <Route path="post">
            <Route index element={<AddPost />} />
            <Route path=":postId" element={<IndividualPost />} />
            <Route path="edit/:postId" element={<EditPost />} />
          </Route>
        </Route>
      </Routes>
    );
  } else {
    return "loading";
  }
  return content;

  // return (
  //   <div className="app">
  //     <AddPost />
  //     <PostsList />
  //   </div>
  // );
};

export default App;
