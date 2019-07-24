import { combineReducers } from "redux";
import PostsReducer from "./postsReducer";
import UsersReducer from "./usersReducer";

const rootReducer = combineReducers({
  users: UsersReducer,
  posts: PostsReducer
});

export default rootReducer;
