import React, { useEffect, useState } from "react";
import ModelViewer from "./components/ModelViewer";
import { ScrollProvider } from "./ScrollContext";
import './App.css';

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
          zIndex: 10,
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
        <div style={{ flex: 1 }}>
          <h2>Teks Kiri</h2>
          <p>Deskripsi, fitur, atau info teknis tentang model.</p>
        </div>
        <div style={{ flex: 1 }}>
          <h2>Teks Kanan</h2>
          <p>Informasi tambahan, link, atau CTA.</p>
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
        <div style={{ flex: 2 }}>
          <h2>Halaman 2</h2>
          <p>Penjelasan lanjut dengan model di sisi kiri.</p>
        </div>
      </section>

      {/* === Halaman Ketiga === */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <div style={{ maxWidth: "600px" }}>
          <h2>Halaman 3</h2>
          <p>
            Ini adalah konten lanjutan. Model tidak ikut lagi, hanya teks biasa.
          </p>
        </div>
      </section>
    </div>
  );
}
