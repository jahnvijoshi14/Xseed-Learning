import Nav from "react-bootstrap/Nav";

function AboutTab(props) {
  return (
    <Nav variant="tabs" defaultActiveKey="/classroom">
      <Nav.Item>
        <Nav.Link to="/classroom" style={{ color: props.color }}>
          <h3>{props.name}</h3>
        </Nav.Link>
      </Nav.Item>
      {/* <Nav.Item>
        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item> */}
    </Nav>
  );
}

export default AboutTab;
