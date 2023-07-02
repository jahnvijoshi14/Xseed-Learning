import { REGISTER_SUCCESS, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./types";

import AuthService from "../service/auth.service";
export const register =
  (email, password, firstname, lastname) => (dispatch) => {
    return AuthService.register(email, password, firstname, lastname).then(
      (response) => {
        if (response.data.status.trim() == "Success") {
          dispatch({
            type: REGISTER_SUCCESS,
            payload: response,
          });
        } else {
          throw Error("User Already Registered");
        }
        return Promise.resolve();
      },
      (error) => {
        console.log("err", error);
        return Promise.reject();
      }
    );
  };

export const login = (username, password) => (dispatch) => {
  return AuthService.login(username, password).then(
    (data) => {
      if (data.data.token != null) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
        });
      } else {
        throw Error("Invalid Credentials");
      }

      return Promise.resolve();
    },
    (error) => {
      // dispatch({
      //   type: LOGIN_FAIL,
      // });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
  return Promise.resolve();
};
