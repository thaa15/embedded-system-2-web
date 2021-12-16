import React from "react";
import theme from "../../../styles/theme";
import {
  SectionThreeTemplate,
  SectionThreeGrid,
  SectionThreeApart,
  SectionThreePhoto,
} from "./style";
import dht11 from "../../../assets/dht11.png";
import esp32 from "../../../assets/esp32.png";
import motordriver from "../../../assets/motordriver.jpg";
import stepper from "../../../assets/stepper.jpg";
import sensorhujan from "../../../assets/sensorhujan.jpeg";
import photosensitive from "../../../assets/photosensitive.jpg";

const HomeSectionThree = () => {
  return (
    <SectionThreeTemplate>
      <h2
        style={{
          textAlign: "center",
          margin: "10px auto 30px",
          color: theme.color.blue.B500,
        }}
      >
        Components
      </h2>
      <SectionThreeGrid>
        <SectionThreeApart>
          <SectionThreePhoto src={esp32} />
          <h3>ESP32</h3>
        </SectionThreeApart>
        <SectionThreeApart>
          <SectionThreePhoto src={dht11} />
          <h3>DHT 11</h3>
        </SectionThreeApart>
        <SectionThreeApart>
          <SectionThreePhoto src={sensorhujan} />
          <h3>YL-83 Rain Module</h3>
        </SectionThreeApart>
        <SectionThreeApart>
          <SectionThreePhoto src={photosensitive} />
          <h3>Photosensitive LDR</h3>
        </SectionThreeApart>
        <SectionThreeApart>
          <SectionThreePhoto src={motordriver} />
          <h3>ULN2003</h3>
        </SectionThreeApart>
        <SectionThreeApart>
          <SectionThreePhoto src={stepper} />
          <h3>Stepper Motor</h3>
        </SectionThreeApart>
      </SectionThreeGrid>
    </SectionThreeTemplate>
  );
};

export default HomeSectionThree;
