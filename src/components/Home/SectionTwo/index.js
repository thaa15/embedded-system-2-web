import React, { useState, useEffect } from "react";
import theme from "../../../styles/theme";
import {
  SectionTwoTemplate,
  SectionTwoExplained,
  SectionTwoEmbedYT,
} from "./style";

const HomeSectionTwo = () => {
  const [obj, setObj] = useState({ width: "", height: "" });
  const showButton = () => {
    if (window.innerWidth <= 720) {
      setObj({ width: "280", height: "157" });
    } else {
      setObj({ width: "560", height: "315" });
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <SectionTwoTemplate>
      <SectionTwoExplained>
        <h3 style={{ color: theme.color.blue.A600 }}>ABOUT RAIDIGO</h3>
        <h6 style={{ lineHeight: "200%", textAlign: "justify" }}>
          Raidigo is a tool that automates clotheslines when signs of rain fall
          with parameters of temperature, humidity, light intensity, and the
          number of water droplets on a raindrop sensor that is secure and
          effective for the IoT platform. Raidigo utilizes the cloud platform as
          a database, watchdog timer on the microcontroller, and multitasking.
          This project is as an Immersion 2 semester final exam assignment.
        </h6>
      </SectionTwoExplained>
      <SectionTwoEmbedYT>
        <iframe
          width={obj.width}
          height={obj.height}
          src="https://www.youtube.com/embed/EqboAI-Vk-U"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </SectionTwoEmbedYT>
    </SectionTwoTemplate>
  );
};

export default HomeSectionTwo;
