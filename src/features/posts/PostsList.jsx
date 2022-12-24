import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
import { getAllPosts } from "./postSlice";

const PostsList = () => {
  const posts = useSelector(getAllPosts);
  console.log(posts);
  const renderPosts = posts.map((post) => <Post key={post.id} post={post} />);
  return <div className="postsList">{renderPosts}</div>;
};

export default PostsList;
