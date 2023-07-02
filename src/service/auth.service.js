import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/auth";

const register = async (email, password, firstname, lastname) => {
  let response = await axios.post(API_URL + "/register", {
    firstname,
    lastname,
    email,
    password,
  });

  console.log(response);
  return response;
};

const login = (email, password) => {
  return axios
    .post(API_URL + "/authenticate", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token && response.data.token != null) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      console.log(response);
      return response;
    })
    .catch((err) => {
      return { response: null };
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default { register, login, logout };
