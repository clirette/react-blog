import _ from "lodash";
import { DELETE_POST, FETCH_CURRENT_USER_POSTS } from "../utils/constants";

const initialState = {
  createdPost: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CURRENT_USER_POSTS:
      return { ...state, ...action.payload, createdPost: false };
    default:
      return state;
  }
}
