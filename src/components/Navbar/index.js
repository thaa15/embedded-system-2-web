import React from "react";
import logo from "../../assets/logo.png";
import { Nav, NavSet, NavLogo, NavItems, NavButton } from "./style";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <NavSet>
        <NavLogo src={logo} />
        <NavItems>
          <Link to="/">
            <NavButton mon>Home</NavButton>
          </Link>
          <Link to="/">
          <NavButton>Monitor</NavButton>
          </Link>
        </NavItems>
      </NavSet>
    </Nav>
  );
};

export default Navbar;
