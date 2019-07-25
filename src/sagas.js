import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  REQUEST_USER_BLOGS,
  receiveUserBlogs,
  REQUEST_AUTHENTICATE_USER,
  receiveAuthenticateUser,
  receiveCreateBlog,
  REQUEST_CREATE_BLOG,
  REQUEST_DELETE_BLOG,
  receiveDeleteBlog,
  SIGN_OUT
} from "./actions";
import { fetchUserBlogs, createBlog, deleteBlog } from "./apis/blog";
import { authenticateUser } from "./apis/user";

function* requestUserBlogs() {
  try {
    const data = yield call(fetchUserBlogs);
    yield put(receiveUserBlogs(data));
  } catch (e) {
    console.log(e);
  }
}

function* authenticateUserSaga(action) {
  try {
    const data = yield call(authenticateUser, action.payload);
    console.log(data);
    yield put(receiveAuthenticateUser(data));
  } catch (e) {
    console.log(e);
  }
}

function* createPostSaga(action) {
  try {
    const data = yield call(createBlog, action.payload);
    yield put(receiveCreateBlog(data));
  } catch (e) {
    console.log(e);
  }
}

function* deletePostSaga(action) {
  try {
    const data = yield call(deleteBlog, action.payload);
    yield put(receiveDeleteBlog(data));
  } catch (e) {
    console.log(e);
  }
}

function* signOutSaga() {
  localStorage.removeItem("jwt");
}

export default function* rootSaga() {
  yield all([
    takeLatest(REQUEST_AUTHENTICATE_USER, authenticateUserSaga),
    takeLatest(REQUEST_USER_BLOGS, requestUserBlogs),
    takeLatest(REQUEST_CREATE_BLOG, createPostSaga),
    takeLatest(REQUEST_DELETE_BLOG, deletePostSaga),
    takeLatest(SIGN_OUT, signOutSaga)
  ]);
}
