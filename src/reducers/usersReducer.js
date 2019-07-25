// import _ from "lodash";
// import { DELETE_POST, FETCH_CURRENT_USER_POSTS } from "../utils/constants";

// const initialState = {
//   createdPost: false
// };

// export default function(state = initialState, action) {
//   switch (action.type) {
//     case FETCH_CURRENT_USER_POSTS:
//       return { ...state, ...action.payload, createdPost: false };
//     default:
//       return state;
//   }
// }

import { RECEIVE_AUTHENTICATE_USER, SIGN_OUT } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case RECEIVE_AUTHENTICATE_USER:
      return action.payload;
    case SIGN_OUT:
      return action.payload;
    default:
      return state;
  }
}
