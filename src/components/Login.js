import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { login } from "../actions/auth";
import { useToasts } from "react-toast-notifications";
import { Link } from "react-router-dom";

const Login = (props) => {
  let navigate = useNavigate();

  const { addToast } = useToasts();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth); //this is map state to the props

  const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    dispatch(login(email, password))
      .then(() => {
        console.log(isLoggedIn);
        addToast("Login successfully!!", { appearance: "success" });
        navigate("/classroom");

        //window.location.reload();
      })
      .catch((err) => {
        addToast("Invalid Credentials!!", { appearance: "error" });
        console.log(err);

        //setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/classroom" />;
  }

  return (
    <>
      <h1 style={{ textAlign: "center", margin: "20px" }}>
        Welcome to Xseed Education
      </h1>
      <Form onSubmit={handleLogin} style={{ margin: "0 auto", width: "65%" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={onChangeEmail}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={onChangePassword}
          />
        </Form.Group>

        {email.trim() && password.trim() ? (
          <Button variant="primary" type="submit">
            Login
          </Button>
        ) : (
          <Button variant="primary" type="submit" disabled>
            Login
          </Button>
        )}
        <div>
          <Link to="/register">New user? click here to register!!!</Link>
        </div>
      </Form>
    </>
  );
};

export default Login;
