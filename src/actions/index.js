import {
  DELETE_POST,
  CREATE_POST,
  FETCH_CURRENT_USER_POSTS
} from "../utils/constants";
import blog from "../apis/blog";

export const fetchCurrentUser = () => async dispatch => {
  const response = await blog.get("/api/users/current", {
    headers: { Authorization: localStorage.getItem("jwt") }
  });
  dispatch({ type: FETCH_CURRENT_USER_POSTS, payload: response.data });
};

export const createPost = post => async dispatch => {
  const response = await blog.post("/api/posts/", post, {
    headers: { Authorization: localStorage.getItem("jwt") }
  });
  dispatch({ type: CREATE_POST, payload: response.data });
};

export const deletePost = post => async dispatch => {
  const response = await blog.delete(`/api/posts/${post._id}`, {
    headers: { Authorization: localStorage.getItem("jwt") }
  });
  dispatch({ type: DELETE_POST, payload: response.data });
};
