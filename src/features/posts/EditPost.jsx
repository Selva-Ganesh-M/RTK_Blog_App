import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllUsers } from "../users/userSlice";
import { getSinglePost } from "./postSlice";

const EditPost = () => {
  const { postId } = useParams();
  const post = useSelector((state) => getSinglePost(state, postId));
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const users = useSelector(getAllUsers);
  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.body);
      setSelectedAuthor();
    }
  }, []);
  if (!post) {
    return "Loading";
  }
  let rContent;
  const previousAuthorDetails = users.find((user) => user.id === post.userId);
  console.log(previousAuthorDetails);
  const canSubmit = [title, content, selectedAuthor].every(Boolean);

  // FUNCTIONS
  const handleSubmit = () => {
    if (!canSubmit) {
      console.log("all fields must be filled.");
      return;
    }
    console.log("handle submit");
  };

  // PREP CONTENT
  rContent = (
    <form onSubmit={handleSubmit}>
      <div className="input-set">
        <label htmlFor="title">title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="input-set">
        <label htmlFor="content">Content</label>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <select
        name="author"
        defaultValue={selectedAuthor}
        onChange={(e) => setSelectedAuthor(e.target.value)}
      >
        <option value={post.userId}>{previousAuthorDetails.id}</option>
        {users.map((user) => {
          console.log(user.name);
          return (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          );
        })}
      </select>
      <button type="submit" disabled={!canSubmit}>
        Edit
      </button>
    </form>
  );

  return rContent;
};

export default EditPost;
