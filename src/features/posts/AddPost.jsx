import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNew } from "./postSlice";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (!title || !content) {
      return;
    }
    dispatch(addNew(title, content));
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
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default AddPost;
