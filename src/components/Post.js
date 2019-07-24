import React from "react";
import getFormattedDate from "../utils/dates";

const Post = ({ _id, title, content, createdAt, createdBy, deletePost }) => {
  const handleClick = e => {
    e.preventDefault();
    deletePost(_id);
  };

  return (
    <div>
      <h1>{title}</h1>
      {typeof createdBy !== "string" && (
        <h3>
          Written by {createdBy.firstName} {createdBy.lastName}
        </h3>
      )}
      <h5>Written on {getFormattedDate(new Date(createdAt))}</h5>
      <p>{content}</p>
      <button onClick={handleClick}>Delete Post</button>
    </div>
  );
};

export default Post;
