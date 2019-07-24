import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCurrentUser, deletePost } from "../actions";
import blog from "../apis/blog";
import Post from "./Post";

const Dashboard = ({ fetchCurrentUser, deletePost, users }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const fetchCurrentUsers = async () => {
    fetchCurrentUser();
    setLoaded(true);
  };

  useEffect(() => {
    fetchCurrentUsers();
  }, []);

  return (
    <div>
      <Link to="/create-post">Create New Post</Link>
      {users.posts && (
        <Fragment>
          <h1>
            {users.firstName} {users.lastName}
          </h1>
          <div>
            <h2>My Posts</h2>
            {users.posts.map(post => (
              <Post
                key={post._id}
                {...post}
                deletePost={() => deletePost(post)}
              />
            ))}
          </div>
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { users: state.users, posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchCurrentUser, deletePost }
)(Dashboard);
