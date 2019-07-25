import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { requestUserBlogs, signOut } from "../actions";
import Post from "./Post";

const Dashboard = ({ requestUserBlogs, posts, signOut, signedOut }) => {
  useEffect(() => {
    requestUserBlogs();
  }, []);

  return (
    <div>
      {signedOut ? <Redirect to="/login" /> : null}
      {localStorage.getItem("jwt") ? (
        <button onClick={signOut}>Sign Out</button>
      ) : (
        <Link to="/login">
          <button>Sign In</button>
        </Link>
      )}
      <Link to="/create-post">
        <button>Create Post</button>
      </Link>
      {posts &&
        posts
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .map(post => <Post {...post} key={post._id} />)}
    </div>
  );
};

const mapStateToProps = state => ({
  posts: state.posts.posts,
  signedOut: state.users.signedOut
});

export default connect(
  mapStateToProps,
  { requestUserBlogs, signOut }
)(Dashboard);
