import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { ReactComponent as Logo } from "../images/logo.svg";

const navbarStyle = {
  backgroundColor: "lightblue",
};

const Header = (props) => {
  return (
    <Navbar style={navbarStyle} variant="lg">
      <Container>
        <Logo alt={props.title} style={{ maxWidth: '10rem' }}/>
      </Container>
    </Navbar>
  );
};

export default Header;
