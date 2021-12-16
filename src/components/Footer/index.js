import React from "react";
import logo from "../../assets/logo.png";
import { Footers, FooterPart, FooterLogo,FooterCPR } from "./styled";

const Footer = () => {
  return (
    <Footers>
      <FooterPart>
        <FooterLogo src={logo} />
        <FooterCPR>
        <h6 className="bold" style={{ textAlign: "center", color: "white" }}>
          Copyrights {new Date().getFullYear()} Thariq Hadyan
        </h6>
        </FooterCPR>
      </FooterPart>
    </Footers>
  );
};

export default Footer;
