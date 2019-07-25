export const REQUEST_USER_BLOGS = "REQUEST_USER_BLOGS";
export const RECEIVE_USER_BLOGS = "RECEIVE_USER_BLOGS";
export const REQUEST_AUTHENTICATE_USER = "REQUEST_AUTHENTICATE_USER";
export const RECEIVE_AUTHENTICATE_USER = "RECEIVE_AUTHENTICATE_USER";
export const REQUEST_CREATE_BLOG = "REQUEST_CREATE_BLOG";
export const RECEIVE_CREATE_BLOG = "RECEIVE_CREATE_BLOG";
export const REQUEST_DELETE_BLOG = "REQUEST_DELETE_BLOG";
export const RECEIVE_DELETE_BLOG = "RECEIVE_DELETE_BLOG";
export const SIGN_OUT = "SIGN_OUT";

export const requestUserBlogs = () => ({ type: REQUEST_USER_BLOGS });
export const receiveUserBlogs = posts => ({
  type: RECEIVE_USER_BLOGS,
  payload: { posts }
});

export const requestAuthenticateUser = ({ email, password }) => ({
  type: REQUEST_AUTHENTICATE_USER,
  payload: { email, password }
});
export const receiveAuthenticateUser = user => ({
  type: RECEIVE_AUTHENTICATE_USER,
  payload: { user }
});

export const requestCreateBlog = ({ title, content }) => ({
  type: REQUEST_CREATE_BLOG,
  payload: { title, content }
});
export const receiveCreateBlog = createdPost => ({
  type: RECEIVE_CREATE_BLOG,
  payload: { createdPost }
});

export const requestDeleteBlog = ({ _id }) => ({
  type: REQUEST_DELETE_BLOG,
  payload: { _id }
});
export const receiveDeleteBlog = ({ msg, postId }) => ({
  type: RECEIVE_DELETE_BLOG,
  payload: { msg, postId }
});

export const signOut = () => ({
  type: SIGN_OUT,
  payload: { signedOut: true }
});
