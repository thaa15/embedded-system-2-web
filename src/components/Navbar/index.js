import React from "react";
import logo from "../../assets/logo.png";
import { Nav, NavSet, NavLogo, NavItems, NavButton, MobileIcon } from "./style";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavSet>
        <NavLogo src={logo} />
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavItems>
          <Link to="/">
            <NavButton mon>Home</NavButton>
          </Link>
          <Link to="/monitor">
            <NavButton>Monitor</NavButton>
          </Link>
        </NavItems>
      </NavSet>
    </Nav>
  );
};

export default Navbar;
