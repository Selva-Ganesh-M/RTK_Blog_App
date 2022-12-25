import React from "react";
import { useSelector } from "react-redux";
import { getAllUsers } from "../users/userSlice";

const Post = ({ post }) => {
  const users = useSelector(getAllUsers);
  let User = users.find((user) => {
    return user.id === post.userId;
  });
  User = User ? User.name : "Unknown Author";
  return (
    <section key={post.id} className="post">
      <h1>{post.title}</h1>
      <p>author: {User}</p>
      <p>{post.content.substring(0, 30)}...</p>
    </section>
  );
};

export default Post;
