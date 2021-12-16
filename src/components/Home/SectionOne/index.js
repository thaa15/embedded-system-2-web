import React from "react";
import photo from "../../../assets/bghome.png";
import { SectionOneHomeBg, SectionOneWelcomed,SectionOneButton } from "./styled";

const HomeSectionOne = () => {
  return (
    <SectionOneHomeBg src={photo}>
      <SectionOneWelcomed>
        <h1 style={{ color: "white" }}>Welcome!</h1>
        <h3 style={{ color: "white", margin: "0 20px", textAlign: "center" }}>
          Raidigo: Automate Clothesline With Us
        </h3>
        <h6 style={{ color: "white", fontStyle: "italic", margin: "0 20px", textAlign: "center" }}>
          Click the button below to the IoT Device
        </h6>
        <SectionOneButton to="/">Monitor!</SectionOneButton>
      </SectionOneWelcomed>
    </SectionOneHomeBg>
  );
};

export default HomeSectionOne;
