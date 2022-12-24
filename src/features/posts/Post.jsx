import React from "react";
import { useSelector } from "react-redux";
import { getAllUsers } from "../users/userSlice";

const Post = ({ post }) => {
  const users = useSelector(getAllUsers);
  let userName = users.find((user) => user.id === post.userId);
  userName = userName ? userName : "Unknown Author";
  return (
    <section key={post.id} className="post">
      <h1>{post.title}</h1>
      <p>author: {userName}</p>
      <p>{post.content.substring(0, 30)}...</p>
    </section>
  );
};

export default Post;
