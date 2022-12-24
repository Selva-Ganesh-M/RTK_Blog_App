import React from "react";
import { useSelector } from "react-redux";
import { getAllPosts } from "./postSlice";

const PostsList = () => {
  const posts = useSelector(getAllPosts);
  console.log(posts);
  const renderPosts = posts.map((post) => (
    <section key={post.id} className="post">
      <h1>{post.title}</h1>
      <p>{post.content.substring(0, 30)}...</p>
    </section>
  ));
  return <div className="postsList">{renderPosts}</div>;
};

export default PostsList;
