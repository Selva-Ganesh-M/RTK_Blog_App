import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
import { getAllPosts } from "./postSlice";

const PostsList = () => {
  const posts = useSelector(getAllPosts);
  // let orderedPosts = posts;
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  const renderPosts = orderedPosts.map((post) => (
    <Post key={post.id} post={post} />
  ));
  return <div className="postsList">{renderPosts}</div>;
};

export default PostsList;
