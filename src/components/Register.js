import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { isEmail } from "validator";

import { register } from "../actions/auth";
import { Container } from "react-bootstrap";
import { useToasts } from "react-toast-notifications";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { addToast } = useToasts();
  const navigate = useNavigate();

  const [firstname, setFirstName] = useState(" ");
  const [lastname, setLastName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.auth);
  const dispatch = useDispatch(); //this is map dispatch to props

  const onChangeFirstName = (e) => {
    const firstname = e.target.value;
    setFirstName(firstname);
  };

  const onChangeLastName = (e) => {
    const lastname = e.target.value;
    setLastName(lastname);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    dispatch(
      register(email.trim(), password.trim(), firstname.trim(), lastname.trim())
    )
      .then(() => {
        addToast("user registered", { appearance: "success" });
        navigate("/");
        setSuccessful(true);
      })
      .catch((err) => {
        addToast("User already registered", { appearance: "error" });
        setSuccessful(false);
      });
  };

  return (
    <>
      <h1 style={{ textAlign: "center", margin: "20px" }}>
        Registeration Form
      </h1>

      <Container>
        <Form
          onSubmit={handleRegister}
          style={{ margin: "0 auto", width: "65%" }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first"
              onChange={onChangeFirstName}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter last"
              onChange={onChangeLastName}
            />
          </Form.Group>

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

          {firstname.trim() &&
          lastname.trim() &&
          email.trim() &&
          password.trim() ? (
            <Button variant="primary" type="submit">
              Submit
            </Button>
          ) : (
            <Button variant="primary" type="submit" disabled>
              Submit
            </Button>
          )}
        </Form>
      </Container>
    </>
  );
};

export default Register;
