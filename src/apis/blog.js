import api from "./index";

export const fetchUserBlogs = async () => {
  try {
    const { data } = await api.get("/api/posts/my-posts", {
      headers: { Authorization: localStorage.getItem("jwt") }
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const createBlog = async ({ title, content }) => {
  try {
    const { data } = await api.post(
      "/api/posts",
      { title, content },
      {
        headers: { Authorization: localStorage.getItem("jwt") }
      }
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteBlog = async ({ _id }) => {
  try {
    const { data } = await api.delete(`/api/posts/${_id}`, {
      headers: { Authorization: localStorage.getItem("jwt") }
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};
