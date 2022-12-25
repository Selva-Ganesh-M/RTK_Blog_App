import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../users/userSlice";
import { addNew, addPost, getPostsStatus } from "./postSlice";

const AddPost = () => {
  // DECLARATIONS
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState("");

  // RTK DECLARATIONS
  const users = useSelector(getAllUsers);
  const dispatch = useDispatch();

  // LOGICS
  const canSubmit = [title, content, selectedAuthor].every(Boolean);
  const handleSubmit = () => {
    if (!canSubmit) {
      return;
    }
    // dispatch(addNew(title, content, selectedAuthor));
    try {
      dispatch(
        addPost({
          title,
          body: content,
          userId: selectedAuthor,
        })
      ).unwrap();
      setTitle("");
      setContent("");
    } catch (error) {
      console.log("adding new post failed: ", error.message);
    }
  };

  return (
    <div className="form">
      <div className="input-section">
        <label htmlFor="title" className="label"></label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="input-section">
        <label htmlFor="content" className="label"></label>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <select
        name="author"
        id="author"
        value={selectedAuthor}
        onChange={(e) => {
          setSelectedAuthor(Number(e.target.value));
        }}
      >
        <option value="" disabled placeholder="Author">
          Author
        </option>
        {users.map((user) => (
          <option key={user.id} label={user.name} value={user.id} />
        ))}
      </select>
      <button onClick={handleSubmit} disabled={!canSubmit}>
        Add
      </button>
    </div>
  );
};

export default AddPost;
