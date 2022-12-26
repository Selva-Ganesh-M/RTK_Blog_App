import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
import { getAllPosts, getPostsError, getPostsStatus } from "./postSlice";

const PostsList = () => {
  // declarations
  const error = useSelector(getPostsError);
  const status = useSelector(getPostsStatus);
  const posts = useSelector(getAllPosts);

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
