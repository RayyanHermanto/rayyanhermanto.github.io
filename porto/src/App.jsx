import React, { useEffect, useState } from "react";
import ModelViewer from "./components/ModelViewer";
import { ScrollProvider } from "./ScrollContext";
import "./App.css";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";

export default function PageWithCanvas() {
  const [isSecondSection, setIsSecondSection] = useState(false);
  const [isBeyondSecondSection, setIsBeyondSecondSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pageHeight = window.innerHeight;

      setIsSecondSection(scrollY > pageHeight * 0.5);
      setIsBeyondSecondSection(scrollY >= pageHeight * 1.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ height: "300vh", position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: isSecondSection ? "100vh" : 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          opacity: isBeyondSecondSection ? 0 : 1,
          transition: "top 0.8s ease, opacity 0.8s ease",
          zIndex: 0,
          pointerEvents: isBeyondSecondSection ? "none" : "auto",
        }}
      >
        <ScrollProvider>
          <ModelViewer />
        </ScrollProvider>
      </div>

      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
}
