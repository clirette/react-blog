import {
  RECEIVE_USER_BLOGS,
  RECEIVE_CREATE_BLOG,
  RECEIVE_DELETE_BLOG
} from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER_BLOGS:
      return action.payload;
    case RECEIVE_CREATE_BLOG:
      return action.payload;
    case RECEIVE_DELETE_BLOG:
      return {
        posts: state.posts.filter(post => post._id !== action.payload.postId)
      };
    default:
      return state;
  }
};
