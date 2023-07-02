export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) {
    console.log(user.token);
    return "Bearer " + user.token;
  } else {
    return {};
  }
}
//return { Authorization: "Bearer " + user.token };
