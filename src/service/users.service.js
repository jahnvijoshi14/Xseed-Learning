import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8080/api/v1/content/";

//"proxy": "http://localhost:8080"
const getContent = () => {
  return axios
    .get(API_URL, {
      headers: {
        Authorization: authHeader(),
      },
    })
    .then((response) => {
      console.log("service", response);
      return response.data;
    });
};

export default getContent;
