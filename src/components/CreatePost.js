import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../actions";
import blog from "../apis/blog";

const CreatePost = ({ createPost, createdPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleFormSubmit = e => {
    e.preventDefault();
    createPost({ title, content });
  };

  return (
    <div>
      {createdPost && console.log(createdPost)}
      {/* {createdPost ? <Redirect to="/dashboard" /> : null} */}
      <h1>Create New Post</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={e => setTitle(e.target.value)}
        />
        <label htmlFor="content">Content</label>
        <textarea
          name="content"
          id="content"
          cols="30"
          rows="10"
          onChange={e => setContent(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return { createdPost: state.posts.posts };
};

export default connect(
  mapStateToProps,
  { createPost }
)(CreatePost);
