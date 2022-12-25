const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateReaction } from "./postSlice";

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();
  const [Mo, setMo] = useState(false);
  const style = {
    cursor: Mo ? "pointer" : "auto",
    display: "flex",
  };
  const content = Object.entries(post.reactions).map(([key, value]) => {
    return (
      <div
        style={style}
        onMouseEnter={() => setMo(!Mo)}
        onMouseLeave={() => setMo(!Mo)}
        onClick={() =>
          dispatch(
            updateReaction({
              key,
              postId: post.id,
            })
          )
        }
        key={key}
      >
        <span> {reactionEmoji[key]}</span>
        <span>{value}</span>
      </div>
    );
  });
  return (
    <div style={{ display: "flex" }} className="buttons-set">
      {content}
    </div>
  );
};

export default ReactionButtons;
