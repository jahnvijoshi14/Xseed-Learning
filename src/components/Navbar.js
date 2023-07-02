import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { logout } from "../actions/auth";

const NavBar = () => {
  let navigate = useNavigate();
  const { addToast } = useToasts();

  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logingout = () => {
    dispatch(logout()).then(() => {
      addToast("Logged out!!", { appearance: "success" });
      navigate("/login");
    });
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Xseed</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {/* <Nav.Link href="#action2">Link</Nav.Link> */}
          </Nav>

          <Form className="d-flex">
            {isLoggedIn && (
              <Button variant="outline-success" onClick={logingout}>
                Log-out
              </Button>
            )}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
