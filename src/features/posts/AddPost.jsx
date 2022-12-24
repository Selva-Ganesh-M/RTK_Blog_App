import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../users/userSlice";
import { addNew } from "./postSlice";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const users = useSelector(getAllUsers);
  const dispatch = useDispatch();
  const canSubmit = [title, content, selectedAuthor].every(Boolean);
  const handleSubmit = () => {
    if (!canSubmit) {
      return;
    }
    dispatch(addNew(title, content, selectedAuthor));
    setTitle("");
    setContent("");
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
        defaultValue="Select"
        value={selectedAuthor}
        onChange={(e) => {
          setSelectedAuthor(e.target.value);
          console.log(e.target.value);
        }}
      >
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <button onClick={handleSubmit} disabled={!canSubmit}>
        Add
      </button>
    </div>
  );
};

export default AddPost;
