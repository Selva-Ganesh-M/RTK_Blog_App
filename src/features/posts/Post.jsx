import { parseISO } from "date-fns";
import { formatDistanceToNow } from "date-fns/esm";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllUsers } from "../users/userSlice";
import ReactionButtons from "./ReactionButtons";

const Post = ({ post }) => {
  const users = useSelector(getAllUsers);

  let User = users.find((user) => {
    return user.id === post.userId;
  });
  User = User ? User.name : "Unknown Author";
  let content;
  if (post) {
    content = (
      <section key={post.id} className="post">
        <h1>{post.title}</h1>
        <p>author: {User}</p>
        <p>{post.body.substring(0, 30)}...</p>
        <p
          style={{
            fontSize: "12px",
            color: "#777",
          }}
        >
          {formatDistanceToNow(parseISO(post.createdAt), { addSuffix: true })}
        </p>
        <ReactionButtons post={post} />
        <Link to={`post/${post.id}`}>View Post</Link>
      </section>
    );
  } else {
    content = <p>loading</p>;
  }
  return content;
};

export default Post;
