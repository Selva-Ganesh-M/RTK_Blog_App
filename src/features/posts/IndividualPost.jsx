import { formatDistanceToNow, parseISO } from "date-fns";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAllUsers } from "../users/userSlice";
import Post from "./Post";
import { getSinglePost } from "./postSlice";
import ReactionButtons from "./ReactionButtons";

const IndividualPost = () => {
  // DECLARATIONS
  const { postId } = useParams();
  const id = postId;

  //   STATE DECLARATIONS
  const post = useSelector((state) => getSinglePost(state, id));
  const users = useSelector(getAllUsers);

  let User = users.find((user) => {
    return user.id === post.userId;
  });
  User = User ? User.name : "Unknown Author";

  //   JSX PREPARATION
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
        {post && <Link to={`/post/edit/${post.id}`}>Edit Post</Link>}
      </section>
    );
  } else {
    content = <p>loading</p>;
  }

  //   RETURN JSX
  return content;
};

export default IndividualPost;
