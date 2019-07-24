import _ from "lodash";
import {
  DELETE_POST,
  CREATE_POST,
  FETCH_CURRENT_USER_POSTS
} from "../utils/constants";

const initialState = {
  posts: [],
  post: {},
  createdPost: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CURRENT_USER_POSTS:
      return { ...state, ...action.payload };
    case CREATE_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        createdPost: true
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload.postId)
      };
    default:
      return state;
  }
}
