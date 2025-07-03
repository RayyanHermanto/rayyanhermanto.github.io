import React, { useEffect, useState } from "react";
import ModelViewer from "./components/ModelViewer";
import { ScrollProvider } from "./ScrollContext";
import './App.css';
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";


export default function PageWithCanvas() {
  const [isSecondSection, setIsSecondSection] = useState(false);
  const [isBeyondSecondSection, setIsBeyondSecondSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pageHeight = window.innerHeight;
  
      // Tetap true jika sudah melewati bagian pertama
      setIsSecondSection(scrollY > pageHeight * 0.5);
  
      // True hanya jika sudah masuk ke bagian ketiga
      setIsBeyondSecondSection(scrollY >= pageHeight * 1.8);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <div style={{ height: "300vh", position: "relative" }}>
      {/* === ModelViewer dengan posisi relatif ke bagian 1 & 2 saja === */}
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

      {/* === Halaman Pertama === */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div
          style={{
            flex: 1,
            margin: "10px",
            padding: "20px",
            borderRadius: "20px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            color: "#fff",
          }}
        >
          <h2>Hi! Saya</h2>
          <p>Rayyan Syahbani Hermanto</p>
        </div>
        <div
          style={{
            flex: 1,
            margin: "10px",
            padding: "20px",
            borderRadius: "20px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            color: "#fff",
          }}
        >
          <h2>⚙️ Fullstack & Game Dev</h2>
          <p>React · Node.js · Three.js · Unity</p>
          <p>🎯 Interaktif & Imersif</p>
          <p>💬 Ayo Kolaborasi!</p>
        </div>
      </section>

      {/* === Halaman Kedua === */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div style={{ flex: 1 }}></div>
        <div style={{ flex: 2, paddingLeft: "300px", zIndex: 1, position: "relative" }}>
        <h2 style={{ marginBottom: "20px" }}>Tentang Saya</h2>
        <p>Saya adalah <strong>Fullstack Developer</strong> dan <strong>Game Developer</strong> yang antusias membangun aplikasi web dan game interaktif dari frontend hingga backend. Dengan keahlian di <strong>React</strong>, <strong>Node.js</strong>, dan <strong>Three.js</strong>, serta pengalaman membuat game menggunakan <strong>Unity</strong> dan <strong>Blender</strong>, saya berfokus menciptakan produk digital yang tidak hanya berfungsi, tapi juga menyenangkan digunakan dan enak dilihat.</p>
        </div>
      </section>

      {/* === Halaman Ketiga === */}
      <SectionThree/>
      <SectionFour />
    </div>
  );
}
