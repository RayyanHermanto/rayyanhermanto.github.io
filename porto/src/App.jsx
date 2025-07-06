import React, { useEffect, useState } from "react";
import ModelViewer from "./components/ModelViewer";
import { ScrollProvider } from "./ScrollContext";
import "./App.css";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import Footer from "./components/Footer";

export default function PageWithCanvas() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSecondSection, setIsSecondSection] = useState(false);
  const [isBeyondSecondSection, setIsBeyondSecondSection] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

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
    <>
      {/* Spinner Overlay */}
      {isLoading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            backgroundColor: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            transition: "opacity 0.5s ease",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              border: "8px solid rgba(255, 255, 255, 0.2)",
              borderTop: "8px solid #fff",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
            }}
          ></div>
        </div>
      )}

      {/* Main Content */}
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
        <Footer />
      </div>
    </>
  );
}
