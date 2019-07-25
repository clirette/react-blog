import React from "react";
import { connect } from "react-redux";
import { requestDeleteBlog } from "../actions";
import getFormattedDate from "../utils/dates";

const Post = ({
  _id,
  title,
  content,
  createdAt,
  createdBy,
  requestDeleteBlog
}) => {
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
      <button onClick={() => requestDeleteBlog({ _id })}>Delete Post</button>
    </div>
  );
};

const mapStateToProps = state => ({
  response: state.posts.response
});

export default connect(
  mapStateToProps,
  { requestDeleteBlog }
)(Post);
