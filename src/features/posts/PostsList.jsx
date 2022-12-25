import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../users/userSlice";
import Post from "./Post";
import {
  fetchPosts,
  getAllPosts,
  getPostsError,
  getPostsStatus,
} from "./postSlice";

const PostsList = () => {
  // declarations
  const error = useSelector(getPostsError);
  const dispatch = useDispatch();
  const status = useSelector(getPostsStatus);
  const posts = useSelector(getAllPosts);

  // side effect
  useEffect(() => {
    if (!error) {
      dispatch(fetchPosts());
      dispatch(fetchUsers());
    }
  }, [error, fetchPosts]);

  // render content
  let content;
  if (status === "loading") {
    content = "loading...";
  } else if (status === "success") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    const renderPosts = orderedPosts.map((post) => (
      <Post key={post.id} post={post} />
    ));
    content = <div className="postsList">{renderPosts}</div>;
  } else if (status === "error") {
    content = <p>{error}</p>;
  } else {
    content = "something went wrong.";
  }

  // return
  return content;
};

export default PostsList;
