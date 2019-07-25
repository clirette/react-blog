import api from "./index";

export const authenticateUser = async ({ email, password }) => {
  try {
    const { data } = await api.post("/api/users/login", {
      email,
      password
    });
    if (data) {
      localStorage.setItem("jwt", data.token);
    }
    console.log(data);
    return data;
  } catch (e) {
    return e.response.data;
  }
};
